import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Map from '../../components/Map/Map.jsx';

class Home extends Component {
  state = {
  };

  render() {
    return (
      <div className={styles.Home}>
        <Map/>
        <Sidebar/>
      </div>
    );
  }
}

export default Home;