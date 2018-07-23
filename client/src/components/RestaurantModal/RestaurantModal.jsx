import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantModal.module.css';

import MapModal from '../../components/MapModal/MapModal.jsx';

class RestaurantModal extends Component {
  static propTypes = {
    match: PropTypes.shape({
      id: PropTypes.string,
    }),
  };

  renderGallery = () => (
    <div className={styles['gallery']} />
  );

  render() {
    const { id } = this.props.match.params;

    return (
      <MapModal redirectURL='/'>
        { this.renderGallery() }

        <div className={styles['content']}>
          <div className={styles['restaurant-info-card']}>
            <h2>Restaurant Name</h2>
            <sub>Test</sub>
          </div>

          <div className={styles['reviews-list']}>

          </div>

        </div>
      </MapModal>
    );
  }
}

export default RestaurantModal;