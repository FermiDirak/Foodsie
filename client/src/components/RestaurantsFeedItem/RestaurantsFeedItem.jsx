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
          <div className={styles['image']} />
          <div className={styles['image']} />
          <div className={styles['image']} />
          <div className={styles['image']} />
        </div>

        <div className={styles['content']}>
          <h2 className={styles['header']}>Restaurant Name</h2>
        </div>

      </div>
    );
  }
}

export default RestaurantsFeedItem;