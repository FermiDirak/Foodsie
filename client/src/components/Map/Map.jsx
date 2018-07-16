import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.css';

import GoogleMap, {
  GoogleApiWrapper,
  InfoWindow,
  Marker,
} from 'google-maps-react';

class Map extends Component {
  state = {

  };

  render() {
    return (
      <GoogleMap
        google={this.props.google}
        className={styles['map']}
        style={{flex: '1'}}
        zoom={15}
        centerAroundCurrentLocation={true}
        onClick={this.onMapClick}
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
  apiKey: 'AIzaSyC4Li8mrhNuFLOEmn-Fcfjgb1-0jxBi7dk',
  libraries: ['places', 'visualization'],
  LoadingContainer: loadingContainer,
})(Map);