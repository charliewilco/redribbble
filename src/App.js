import React, { Component } from 'react'
import { Debounce } from 'react-throttle'
import axios from 'axios'
import Header from './Header'
import SuperContainer from './Container'

const If = props =>
  props.condition ? props.children : null

class App extends Component {
  state = {
    user: 'charlespeters',
    shots: [],
    found: true
  }

  componentDidMount () {
    this.serverRequest(this.state.user)
  }


  serverRequest = user => {
    const url = `https://api.dribbble.com/v1/users/${user}/shots?access_token=${this.props.source}`
    return axios.get(url)
      .then((result) => {
        this.setState({ found: true, shots: result.data })
      })
      .catch(err => {
        console.warn(err)
        this.setState({ found: false })
      })
  }

  update = (e) => {
    e.preventDefault()

    this.setState({ user: e.target.value })
    return this.serverRequest(this.state.user)
  }

  render () {
    return (
      <div className='u-mb6'>
        <Header name='Redribbble'>
          <div className='o-container--full o-container--center u-px2 u-mb2'>
            <label htmlFor='input' className='Label u-lt-2 u-caps u-w700 u-left'>Search Dribbble Username</label>
          </div>
          <div className='Input__container'>
            <div className='o-container--full o-container--center'>
              <Debounce time='400' handler='onChange'>
                <input id='input' type='text' className='Input u-px2' placeholder='Username (eg. simplebits)' onChange={e => this.update(e)} />
              </Debounce>
            </div>
          </div>
        </Header>
        <div className='o-container--full o-container--center u-px2'>
          <If condition={this.state.found === false}>
            <h2 className='u-red'>{this.state.user} not Found</h2>
          </If>
        </div>
        <SuperContainer {...this.state} />
      </div>
    )
  }
}

export default App
