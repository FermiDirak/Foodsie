import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantsFeed.module.css';

import RestaurantsFeedItem from '../RestaurantsFeedItem/RestaurantsFeedItem.jsx';

class RestaurantsFeed extends Component {
  static propTypes = {
    restaurants: PropTypes.array,
  }

  static defaultProps = {
    restaurants: [],
  }

  render() {
    const { restaurants } = this.props;

    return (
      <div className={styles['container']}>
        <div className={styles['scroll-container']}>

          {
            restaurants.map(restaurant => (
              <RestaurantsFeedItem key={restaurant.id} restaurant={restaurant} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default RestaurantsFeed;