import React from 'react'
import Tray from './Tray'

export default (props) => (
  <div className='o-col--12/12 o-col--5/12@md o-col--4/12@lg u-my3 u-px2'>
    <div className='Card u-ov--hid'>
      <figure className='c-card__figure o-intrinsic o-intrinsic--4x3'>
        <img src={props.image} className='o-intrinsic__item u-fit--cover u-bl' alt={props.title} />
      </figure>
      <Tray
        likes={props.likes}
        views={props.views}
        rebounds={props.rebounds}
      />
      <div className='c-card__content u-p3'>
        <header className='u-mb2'>
          <h2 className='h6 u-w500 u-mb2 u-lh-1'>
            <a href={props.url}>{props.title}</a>
          </h2>
          <span className='u-ltgray'>{props.user}</span>
        </header>
      </div>
    </div>
  </div>
)
