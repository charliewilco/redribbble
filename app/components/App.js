import React, { Component } from 'react'
import { Debounce } from 'react-throttle'
import axios from 'axios'
import '../styles/index.css'
import Header from './Header'
import SuperContainer from './Container'

const If = props =>
  props.condition ? props.children : null

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: 'charlespeters',
      shots: [],
      found: true
    }

    this.update.bind(this)
  }

  componentDidMount () {
    this.serverRequest(this.state.user)
  }

  componentWillUnmount () {}

  serverRequest (user) {
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

  update (e) {
    e.preventDefault()

    // const dribbble new Promise(function(resolve, reject) {
    //
    // });
    // setTimeOut()
    this.setState({ user: e.target.value })
    return this.serverRequest(this.state.user)
  }

  render () {
    return (
      <div className='u-px3'>
        <Header name='Redribbble' />
        <div className='o-container--full o-container--center u-px2'>
          <div className='o-container--sm u-mb3'>
            <label htmlFor='input' className='u-left'>Search Dribbble Username</label>
            <Debounce time='400' handler='onChange'>
              <input id='input' type='text' className='c-field' placeholder='Username (eg. simplebits)' onChange={this.update.bind(this)} />
            </Debounce>
          </div>
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
