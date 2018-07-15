import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantsFeed.module.css';

import RestaurantsFeedItem from './RestaurantsFeedItem.jsx';

class RestaurantsFeed extends Component {
  state = {

  };

  render() {
    return (
      <div className={styles['container']}>
        <div className={styles['scroll-container']}>
          <RestaurantsFeedItem />
          <RestaurantsFeedItem />
          <RestaurantsFeedItem />
          <RestaurantsFeedItem />
        </div>
      </div>
    );
  }
}

export default RestaurantsFeed;