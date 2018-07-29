import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantModal.module.css';

import axios from 'axios';
import { googleMapsAPIKey } from '../../publicKeys'

import MapModal from '../../components/MapModal/MapModal.jsx';

class RestaurantModal extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
    restaurant: PropTypes.shape({
      name: PropTypes.string,
      photos: PropTypes.array,
      price_level: PropTypes.number,
      rating: PropTypes.number,
      types: PropTypes.array,
      opening_hours: PropTypes.object,
    }),
  };

  state = {

  }

  // componentDidMount() {
  //   this.fetchRestaurantData();
  // }

  // fetchRestaurantData = () => {
  //   const { id } = this.props.match.params;

  //   axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}`)
  // }

  renderGallery = () => (
    <div className={styles['image-gallery']}>
      <div className={styles['image']} />
      <div className={styles['image']} />
      <div className={styles['image']} />
      <div className={styles['image']} />
      <div className={styles['image']} />
      <div className={styles['image']} />
    </div>
  );

  render() {
    // const { id } = this.props.match.params;

    console.log(this.props.restaurant);

    return (
      <MapModal redirectURL='/'>
        { this.renderGallery() }

        <div className={styles['content']}>
          <div className={styles['restaurant-info-card']}>
            <h2>Restaurant Name</h2>
            <sub>123 Restaurant Address Way 123456, CA</sub>
          </div>

          <div className={styles['reviews-list']}>

          </div>

        </div>
      </MapModal>
    );
  }
}

export default RestaurantModal;