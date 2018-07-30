import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantModal.module.css';

import MapModal from '../../components/MapModal/MapModal.jsx';
import StarsDisplay from '../StarsDisplay/StarsDisplay.jsx';
import PriceDisplay from '../PriceDisplay/PriceDisplay.jsx';

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

  renderGallery = () => {
    let { photos } = this.props.restaurant;

    photos = photos.slice(0, 6);

    photos = photos.map((photo, i) => (
      <img
        key={i}
        className={styles['image']}
        src={photo.getUrl({ maxWidth: 500, maxHeight: 200 })}
        alt='restaurant gallery'
      />
    ));

    return (
      <div className={styles['image-gallery']}>
        { photos }
      </div>
    );
  }

  renderReviewsList = () => {
    const { reviews } = this.props.restaurant;

    return (
      <div className={styles['reviews-scroll']}>
        {
          reviews.map((review, i) => (
            <div className={styles['review']} key={i}>
              <img
                className={styles['review-profile-icon']}
                src={review.profile_photo_url}
              />
              <p>{review.author_name} says: {review.text}</p>
            </div>
          ))
        }
      </div>
    )
  }

  /** displayed while restaurant is loading */
  renderLoading = () => (
    <div/>
  )

  render() {
    const { restaurant } = this.props;

    if (!restaurant) {
      return this.renderLoading();
    }

    return (
      <MapModal redirectURL='/'>
        { this.renderGallery() }

        <div className={styles['content']}>
          <div className={styles['restaurant-info-card']}>
            <h2>{restaurant.name}</h2>
            <sub>{restaurant.vicinity}</sub>

            <div className={styles['statistics-row']}>
              <StarsDisplay rating={restaurant.rating} />
              <PriceDisplay price={restaurant.price_level} />
            </div>

          </div>

          {this.renderReviewsList()}

        </div>
      </MapModal>
    );
  }
}

export default RestaurantModal;