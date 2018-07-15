import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

import { NavigationBar, NavigationItem } from '../NavigationBar';
import RestaurantsFeed from '../RestauraantsFeed/RestaurantsFeed.jsx';

import RestaurantsIcon from 'react-feather/dist/icons/heart';
import FoodiesIcon from 'react-feather/dist/icons/users';

class Sidebar extends Component {
  state = {

  };

  render() {
    return (
      <aside className={styles.Sidebar}>
        <NavigationBar>
          <NavigationItem label='restuarants' icon={<RestaurantsIcon/>} />
          <NavigationItem label='foodies' icon={<FoodiesIcon/>} />
        </NavigationBar>

        <RestaurantsFeed />
      </aside>
    );
  }
}

export default Sidebar;