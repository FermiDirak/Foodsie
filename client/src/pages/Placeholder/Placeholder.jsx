import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import styles from './Placeholder.module.css';


class Placeholder extends Component {
  state = {

  };

  render() {
    return (
      <div className={styles['Placeholder']}>

        <div className={styles['header']}>
          <img src={logo} className={styles['logo']} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default Placeholder;