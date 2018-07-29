import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Map from '../../components/Map/Map.jsx';
import RestaurantModal from '../../components/RestaurantModal/RestaurantModal.jsx';

import { Route } from 'react-router-dom';

class Home extends Component {
  state = {
    restaurants: [],
  };

  /** fetches nearby restaurants and sets it as state
   * @param restaurants Nearby restaurants */
  fetchPlaces = (restaurants) => {
    this.setState({ restaurants: restaurants });
  }

  render() {
    const { restaurants } = this.state;

    return (
      <div className={styles.Home}>

        <div className={styles['map-container']} >
          <Map fetchPlaces={this.fetchPlaces}/>

          <Route path='/restaurant/:id' component={() => <RestaurantModal restaurant={restaurants[0]} />} />
        </div>

        <Sidebar restaurants={restaurants}/>
      </div>
    );
  }
}

export default Home;