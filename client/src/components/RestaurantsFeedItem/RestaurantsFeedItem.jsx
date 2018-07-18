import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantsFeedItem.module.css';

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
        </div>

      </div>
    );
  }
}

export default RestaurantsFeedItem;