import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

class Header extends Component {
  state = {

  };

  render() {
    return (
      <header className={styles.Header}>
        <h1 className={styles.Logo}>
          Foodsie.io
        </h1>
      </header>
    );
  }
}

export default Header;