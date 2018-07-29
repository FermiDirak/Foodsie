import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PriceDisplay.module.css';

class PriceDisplay extends Component {
  static propTypes = {
    price: PropTypes.number,
  }

  static defaultProps = {
    price: 0,
  }

  render() {
    const { price } = this.props;

    const percent = 100 - Math.floor(100 * price / 3);

    return (
      <div className={styles['container']}>

        <div
          className={styles['price-grey']}
        >
          $$$
        </div>

        <div
          className={styles['price']}
          style={{clipPath: `inset(0 ${percent}% 0 0)`}}
        >
          $$$
        </div>
      </div>
    );
  }
}

export default PriceDisplay;