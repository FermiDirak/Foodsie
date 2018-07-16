import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Map from '../../components/Map/Map.jsx';

class Home extends Component {
  state = {
    places: [],
  };

  componentDidMount() {

  }

  getPlaces() {

  }

  render() {
    return (
      <div className={styles.Home}>

        <div className={styles['map-container']} >
          <Map/>
        </div>

        <Sidebar/>
      </div>
    );
  }
}

export default Home;