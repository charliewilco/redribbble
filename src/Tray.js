import React from 'react'
import './Tray.css'

export default ({ likes, views, rebounds }) => (
  <div className='Tray'>
    <ul className='Tray__list'>
      <li>{likes} Likes</li>
      <li>{views} Views</li>
      <li>{rebounds} Rebounds</li>
    </ul>
  </div>
)
