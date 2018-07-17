import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Map from '../../components/Map/Map.jsx';

import axios from 'axios';
import { googleMapsAPIKey } from '../../publicKeys';

class Home extends Component {
  state = {
    places: [],
  };

  /** fetches nearby places and sets it as state
   * @param places Nearby places */
  fetchPlaces = (places) => {
    this.setState({ places: places });

  }

  render() {
    return (
      <div className={styles.Home}>

        <div className={styles['map-container']} >
          <Map fetchPlaces={this.fetchPlaces}/>
        </div>

        <Sidebar/>
      </div>
    );
  }
}

export default Home;