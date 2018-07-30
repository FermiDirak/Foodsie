import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={styles['container']}>
        <h1 className={styles['logo']}>
          Foodsie.io
        </h1>
      </header>
    );
  }
}

export default Header;