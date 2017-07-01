import React from 'react'
import Tray from './Tray'
import './Card.css'

export default ({ image, title, description, images, likes_count, views_count, html_url, rebounds_count }) => (
  <div className='Card'>
    <figure className='Card__figure'>
      <img src={images.hidpi ? images.hidpi : images.normal} className='Card__shot' alt={title} />
    </figure>
    <Tray likes={likes_count} views={views_count} rebounds={rebounds_count} />
    <div className='Card__content'>
      <header>
        <h3 className='Card__title'>
          <a className='Card__link' href={html_url}>{title}</a>
        </h3>
      </header>
    </div>
  </div>
)
