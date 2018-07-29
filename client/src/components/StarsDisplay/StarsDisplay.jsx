import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './StarsDisplay.module.css';

import StarIcon from 'react-feather/dist/icons/star';


class StarsDisplay extends Component {
  static propTypes = {
    rating: PropTypes.number,
  }

  static defaultProps = {
    rating: 0,
  }

  render() {
    const { rating } = this.props;
    const percent = 100 - Math.floor(100 * rating / 5);

    return (
      <div className={styles['container']}>
        <div
          className={styles['stars']}
        >
          <StarIcon className={styles['star-grey']} />
          <StarIcon className={styles['star-grey']} />
          <StarIcon className={styles['star-grey']} />
          <StarIcon className={styles['star-grey']} />
          <StarIcon className={styles['star-grey']} />
        </div>

        <div
          className={styles['stars']}
          style={{clipPath: `inset(0 ${percent}% 0 0)`}}
        >
          <StarIcon className={styles['star']} />
          <StarIcon className={styles['star']} />
          <StarIcon className={styles['star']} />
          <StarIcon className={styles['star']} />
          <StarIcon className={styles['star']} />
        </div>
      </div>
    );
  }
}

export default StarsDisplay;