import React from 'react'
import './Header.css'

export default ({ children }) => (
  <header className='Header'>
    <div className='o-container--full o-container--center u-py5 u-px2'>
      <div className='Ball' />
      <h1 className='Header__title'>Redribbble</h1>
    </div>
    {children}
  </header>
)
