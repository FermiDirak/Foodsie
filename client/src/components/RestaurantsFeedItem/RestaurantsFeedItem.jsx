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

  renderImageGallery = () => {
    let { photos } = this.props.restaurant;

    photos = photos.slice(0, 4);

    photos = photos.map((photo, i) => (
      <img
        key={i}
        className={styles['image']}
        // key={photo.html_attributions[0]}
        src={photo.getUrl({ maxWidth: 200, maxHeight: 100 })}
      />
    ));

    return (
      <div className={styles['image-gallery']}>
        { photos }
      </div>
    )
  }

  renderIsOpen = () => {
    const { open_now } = this.props.restaurant.opening_hours || {};

    return(
      <p
        className={styles['open-indicator']}
        style={{color: open_now ? 'var(--red)' : 'var(--lightgrey)'}}
      >
        { open_now ? 'open now' : 'closed'}
      </p>
    );
  }

  renderRatingStars = () => {
    const { rating } = this.props.restaurant;
    const percent = 100 - Math.floor(100 * rating / 5);

    const stars = Array(Math.ceil(rating))
      .fill(<StarIcon className={styles['star']}/>);

    return (
      <div className={styles['stars-container']}
      >
        <div className={styles['stars']}>
          <StarIcon className={styles['star-grey']}/>
          <StarIcon className={styles['star-grey']}/>
          <StarIcon className={styles['star-grey']}/>
          <StarIcon className={styles['star-grey']}/>
          <StarIcon className={styles['star-grey']}/>
        </div>

        <div className={styles['stars']}
          style={{clipPath: `inset(0 ${percent}% 0 0)`}}
        >
          <StarIcon className={styles['star']}/>
          <StarIcon className={styles['star']}/>
          <StarIcon className={styles['star']}/>
          <StarIcon className={styles['star']}/>
          <StarIcon className={styles['star']}/>
        </div>
      </div>
    );
  }

  renderPrice = () => {
    const { price_level } = this.props.restaurant;
    const percent = 100 - Math.floor(100 * price_level / 3);

    return (
      <div className={styles['price-container']}>
        <div className={styles['price-grey']}>$$$</div>
        <div
          className={styles['price']}
          style={{clipPath: `inset(0 ${percent}% 0 0)`}}
        >
          $$$
        </div>
      </div>
    );
  }

  renderTopReview = () => {
    const { author_name, text } = this.props.restaurant.reviews[0];

    return (
      <div className={styles['top-review']}>
        {author_name} says: {text}
      </div>
    );
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div className={styles['container']}>

        { this.renderImageGallery() }

        <div className={styles['content']}>

          <div className={styles['header-row']}>
            <h2 className={styles['header']}>{restaurant.name}</h2>
            { this.renderIsOpen() }
          </div>

          <div className={styles['statistics-row']}>
            { this.renderRatingStars() }
            { this.renderPrice() }
          </div>

          { this.renderTopReview() }

        </div>

      </div>
    );
  }
}

export default RestaurantsFeedItem;