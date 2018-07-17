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

    console.log(places);

    let promises = [];

    places = places.forEach(place => {
      let promise = axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${place.place_id}&fields=photos&key=${googleMapsAPIKey}`)
        .then(res => {
          return res.result.photos;
        })
        .then(photos => {
          return photos.map(photo => photo.photo_reference);
        })
        .then(photoRefs => {
          places.photos = photoRefs;
        });

      promises.push(promise);
    });

    Promise.all(promises)
      .then(() => {
        console.log(places);
        this.setState({ places: places });
      })
      .catch(error => { console.error(error) });

    // this.setState({ places: places });
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