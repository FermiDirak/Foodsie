import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.css';

import { googleMapsAPIKey } from '../../publicKeys';

import GoogleMap, {
  GoogleApiWrapper,
} from 'google-maps-react';

class Map extends Component {
  static propTypes = {
    fetchPlaces: PropTypes.func,
    google: PropTypes.object,
  }

  static defaultProps = {
    fetchPlaces: () => {},
  }

  fetchPlaces = (_, map, place) => {
    const { fetchPlaces, google } = this.props;
    const placesService = new google.maps.places.PlacesService(map);

    const request = {
      location: map.getCenter(),
      radius: 500,
      type: ['restaurant'],
    };

    placesService.nearbySearch(request, (places, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {

        let requestsCompletedCount = 0;

        // get more detailed photos
        places.forEach((place, i) => {
          const request = {
            placeId: place.place_id,
            fields: ['photos', 'reviews'],
          };

          placesService.getDetails(request, (placeDetails, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              places[i].photos = placeDetails.photos;
              places[i].reviews = placeDetails.reviews;
            }

            requestsCompletedCount += 1;

            if (requestsCompletedCount === places.length) {
              onCompleteRequest(places);
            }
          });
        });

      } else {
        console.error(`${status}: Google Maps API must be down`);
      }
    });

    function onCompleteRequest(places) {
      places = places.filter(place => place.photos
        && place.photos.length >= 4
        && place.reviews.length >= 1
      );

      fetchPlaces(places);
    }
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