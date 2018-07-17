import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantsFeedItem.module.css';

class RestaurantsFeedItem extends Component {
  state = {

  };

  render() {
    return (
      <div className={styles['container']}>
        <div className={styles['image-gallery']}>
          Hello
        </div>

      </div>
    );
  }
}

export default RestaurantsFeedItem;