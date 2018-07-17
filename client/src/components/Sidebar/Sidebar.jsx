import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import NavigationBarItem from '../NavigationBarItem/NavigationBarItem.jsx';

import RestaurantsFeed from '../RestaurantsFeed/RestaurantsFeed.jsx';

import RestaurantsIcon from 'react-feather/dist/icons/heart';
import FoodiesIcon from 'react-feather/dist/icons/users';

class Sidebar extends Component {
  state = {

  };

  render() {
    return (
      <aside className={styles.Sidebar}>
        <NavigationBar>
          <NavigationBarItem label='restuarants' icon={<RestaurantsIcon/>} />
          <NavigationBarItem label='foodies' icon={<FoodiesIcon/>} />
        </NavigationBar>

        <RestaurantsFeed />
      </aside>
    );
  }
}

export default Sidebar;