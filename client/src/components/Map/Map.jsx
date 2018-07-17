import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.css';

import { googleMapsAPIKey } from '../../publicKeys';

import GoogleMap, {
  GoogleApiWrapper,
  InfoWindow,
  Marker,
} from 'google-maps-react';

class Map extends Component {
  static propTypes = {
    fetchPlaces: PropTypes.func,
    google: PropTypes.object,
  }

  static defaultProps = {
    fetchPlaces: () => {},
  }

  state = {

  };

  fetchPlaces = (_, map, place) => {
    const { fetchPlaces, google } = this.props;
    const placesService = new google.maps.places.PlacesService(map);

    const request = {
      location: map.getCenter(),
      radius: 500,
      type: ['restaurant'],
    };

    placesService.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {

        // remove photos
        results.forEach(result => { result.photos = [] });

        //draw markers for each place

        fetchPlaces(results);
      } else {
        console.error(`${status}: Google Maps API must be down`);
      }
    });
  }

  render() {
    return (
      <GoogleMap
        google={this.props.google}
        className={styles['map']}
        zoom={15}
        centerAroundCurrentLocation={true}
        onClick={this.fetchPlaces}
        onReady={this.fetchPlaces}
        clickableIcons={true}
        disableDefaultUI={true}
      />
    );
  }
}

const loadingContainer = (props) => (
  <div className={styles['container']}> Loading </div>
)

export default GoogleApiWrapper({
  apiKey: googleMapsAPIKey,
  libraries: ['places', 'visualization'],
  LoadingContainer: loadingContainer,
})(Map);