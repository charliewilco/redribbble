import React from 'react'
import './Error.css'

export default ({ user }) => (
  <div className='Error u-px2 u-center u-py5'>
    <h2 className='Error__message'>{user} not Found</h2>
  </div>
)
