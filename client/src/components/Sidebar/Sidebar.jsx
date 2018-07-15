import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

class Sidebar extends Component {
  state = {

  };

  render() {
    return (
      <div className={styles.Sidebar}>
        <NavigationBar />

        This is Sidebar
      </div>
    );
  }
}

export default Sidebar;