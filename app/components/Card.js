import React from 'react'
import Tray from './Tray'

class Card extends React.Component {
  createMarkup (x) {
    return { '__html': x }
  }

  render () {
    return (
      <div className='o-col--12/12 o-col--5/12@md o-col--4/12@lg u-my3 u-px2'>
        <div className='c-card'>
          <figure className='c-card__figure o-intrinsic o-intrinsic--4x3'>
            <img src={this.props.image} className='o-intrinsic__item u-fit--cover u-bl' alt={this.props.title} />
          </figure>
          <Tray
            likes={this.props.likes}
            views={this.props.views}
            rebounds={this.props.rebounds}
          />
          <div className='c-card__content u-p3'>
            <header className='u-mb2'>
              <h2 className='h5 u-w500 u-lh-1'>
                <a href={this.props.url}>{this.props.title}</a>
              </h2>
              <small className='u-ltgray'>{this.props.user}</small>
            </header>
            <div className='u-sans' dangerouslySetInnerHTML={this.createMarkup(this.props.description)} />
          </div>
        </div>
      </div>
    )
  }
}

export default Card
