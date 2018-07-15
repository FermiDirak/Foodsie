import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantsFeed.module.css';

import RestaurantsFeedItem from './RestaurantsFeedItem.jsx';

class RestaurantsFeed extends Component {
  state = {

  };

  render() {
    return (
      <div className={styles.container}>
        {/* <RestaurantsFeedItem />
        <RestaurantsFeedItem />
        <RestaurantsFeedItem />
        <RestaurantsFeedItem /> */}
      </div>
    );
  }
}

export default RestaurantsFeed;