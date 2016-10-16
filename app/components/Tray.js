import React from 'react'

const Tray = props =>
  <div>
    <ul className='list--reset o-flex o-flex--j--c u-center u-py2 u-bg--palegray u-w500 small'>
      <li className='small u-p1 o-col--4/12'>{props.likes} Likes</li>
      <li className='small u-p1 o-col--4/12'>{props.views} Views</li>
      <li className='small u-p1 o-col--4/12'>{props.rebounds} Rebounds</li>
    </ul>
  </div>

export default Tray
