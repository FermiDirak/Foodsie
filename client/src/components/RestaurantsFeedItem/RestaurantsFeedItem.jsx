import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantsFeedItem.module.css';

import StarIcon from 'react-feather/dist/icons/star';

class RestaurantsFeedItem extends Component {
  static propTypes = {
    restaurant: PropTypes.shape({
      name: PropTypes.string,
      photos: PropTypes.array,
      price_level: PropTypes.number,
      rating: PropTypes.number,
      types: PropTypes.array,
      opening_hours: PropTypes.object,
    }).isRequired,
  }

  renderRatingStars = () => {
    const { rating } = this.props.restaurant;
    const percent = 100 - Math.floor(100 * rating / 5);

    const stars = Array(Math.ceil(rating))
      .fill(<StarIcon className={styles['star']}/>);

    return (
      <div className={styles['stars-container']}>
        <div className={styles['stars']}
          style={{clipPath: `inset(0 ${percent}% 0 0)`}}
        >
          <StarIcon className={styles['star']}/>
          <StarIcon className={styles['star']}/>
          <StarIcon className={styles['star']}/>
          <StarIcon className={styles['star']}/>
          <StarIcon className={styles['star']}/>
        </div>

        <div className={styles['stars']}
          style={{clipPath: `inset(0 0 0 ${100 - percent}%)`}}
        >
          <StarIcon className={styles['grey-star']}/>
          <StarIcon className={styles['grey-star']}/>
          <StarIcon className={styles['grey-star']}/>
          <StarIcon className={styles['grey-star']}/>
          <StarIcon className={styles['grey-star']}/>
        </div>
      </div>
    );
  }

  render() {
    const { restaurant } = this.props;

    console.log(restaurant);

    return (
      <div className={styles['container']}>

        <div className={styles['image-gallery']}>
          <div className={styles['image']} />
          <div className={styles['image']} />
          <div className={styles['image']} />
          <div className={styles['image']} />
        </div>

        <div className={styles['content']}>
          <h2 className={styles['header']}>{restaurant.name}</h2>

          <div className={styles['statistics-row']}>
            { this.renderRatingStars() }

          </div>

        </div>

      </div>
    );
  }
}

export default RestaurantsFeedItem;