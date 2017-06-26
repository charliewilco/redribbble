import React from 'react'
import Card from './Card'

export default ({ shots, user }) =>
  <div className='o-container--full o-container--center SuperContainer'>
    {shots.map(shot => {
      console.log(shot)
      return (
        <Card
          key={shot.id}
          title={shot.title}
          image={shot.images.hidpi ? shot.images.hidpi : shot.images.normal}
          url={shot.html_url}
          description={shot.description}
          user={user}
          likes={shot.likes_count}
          views={shot.views_count}
          rebounds={shot.rebounds_count}
        />
      )
    })}
  </div>
