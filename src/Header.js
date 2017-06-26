import React from 'react'

export default ({ name, children }) =>
  <header className='Header'>
    <div className='o-container--full o-container--center u-py5 u-px2'>
      <div className='Ball' />
      <h1 className='h6 u-w500 u-inbl'>{name}</h1>
    </div>
    {children}
  </header>
