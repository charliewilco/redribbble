import React from 'react'
import Card from './Card'

const Container = props =>
  <div className='c-card__container o-container--full o-container--center o-flex o-flex--wrap o-flex--j--c'>
    {props.shots.map(shot => {
      console.log(shot)
      return (
        <Card
          key={shot.id}
          title={shot.title}
          image={shot.images.hidpi ? shot.images.hidpi : shot.images.normal}
          url={shot.html_url}
          description={shot.description}
          user={props.user}
          likes={shot.likes_count}
          views={shot.views_count}
          rebounds={shot.rebounds_count}
        />
      )
    })}
  </div>

export default Container
