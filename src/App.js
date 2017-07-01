import React, { Component } from 'react'
import { Debounce } from 'react-throttle'
import Header from './Header'
import SuperContainer from './Container'
import Error from './Error'
import Loading from './Loading'

export default class extends Component {
  state = {
    user: 'charlespeters',
    shots: [],
    loaded: false,
    found: false
  }

  componentDidMount () {
    this.serverRequest(this.state.user)
  }


  serverRequest = user => {
    fetch(`https://api.dribbble.com/v1/users/${user}/shots?access_token=${this.props.source}`)
      .then(res => res.json())
      .then(data => this.setState({ loaded: true, found: true, shots: data }))
      .catch(err => this.setState({ found: false }, console.error(err)))
  }

  update = (e) => {
    e.preventDefault()

    return this.setState({ user: e.target.value }, this.serverRequest(this.state.user))
  }

  render () {
    const { user, found, loaded } = this.state
    return (
      <div>
        <Header name='Redribbble'>
          <div className='Wrapper u-px2 u-mb2'>
            <label htmlFor='input' className='Label u-lt-2 u-caps u-left'>Search Dribbble Username</label>
          </div>
          <div className='Input__container'>
            <div className='Wrapper'>
              <Debounce time='400' handler='onChange'>
                <input id='input' type='text' className='Input u-px2' placeholder='Username (eg. simplebits)' onChange={e => this.update(e)} />
              </Debounce>
            </div>
          </div>
        </Header>
        <div className='Wrapper Wrapper--b'>
          {
            loaded
            ? found === false ? <Error user={user} /> : <SuperContainer {...this.state} />
            : <Loading />
          }
        </div>
      </div>
    )
  }
}
