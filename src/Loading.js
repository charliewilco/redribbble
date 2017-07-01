import React from 'react'
import court from './FullCourt.svg'
import './Loading.css'

export default () => (
  <div className='Loading'>
    <img className='Loading__court' src={court} alt='Loading...' role='presentation' />
    <h1 className='Loading__text'>Sweeping up the court...</h1>
  </div>
)
