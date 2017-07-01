import React from 'react'
import Card from './Card'
import './Super.css'


export default ({ shots, user }) =>
  <div className='Super'>
    {
      shots.map(s =>
        <div key={s.id} className='Super__column'>
          <Card key={s.id} user={user} {...s} />
        </div>
      )
    }
  </div>
