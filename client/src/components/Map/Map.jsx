import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.css';

import { googleMapsAPIKey } from '../../publicKeys';

import { withRouter } from 'react-router-dom';

import GoogleMap, {
  GoogleApiWrapper,
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
    places: [],
  }

  fetchPlaces = (_, map, place) => {
    const { fetchPlaces, google } = this.props;
    const placesService = new google.maps.places.PlacesService(map);

    const request = {
      location: map.getCenter(),
      type: 'restaurant',
      // rankBy: google.maps.places.RankBy.DISTANCE,
      radius: 1000,
    };

    placesService.nearbySearch(request, (places, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {

        let requestsCompletedCount = 0;

        // get more detailed photos
        places.forEach((place, i) => {
          const request = {
            placeId: place.place_id,
            fields: ['photos', 'reviews' ],
          };

          console.log(google.maps.places);

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

    const onCompleteRequest = (places) => {
      console.log(' places', places);

      places = places.filter(place => place.photos
        && place.photos.length >= 4
      );

      this.setState({ places: places });

      fetchPlaces(places);
    }
  }

  render() {
    const { google } = this.props;
    const { places } = this.state;

    return (
      <GoogleMap
        google={this.props.google}
        className={styles['map']}
        zoom={16}
        onClick={this.fetchPlaces}
        onDragend={this.fetchPlaces}
        onReady={this.fetchPlaces}
        clickableIcons={false}
        disableDefaultUI={true}
        initialCenter={{
            lat: 37.7880,
            lng: -122.4075
          }}
        styles={[
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]}
      >

        {
          places.map(place => {
            const { id, name, geometry } = place;

            return (
              <Marker
                key={id}
                title={name}
                name={name}
                position={{lat: geometry.location.lat(), lng: geometry.location.lng()}}
                onClick={() => { this.props.history.push(`/restaurant/${id}`) }}
                icon={{
                  url: 'https://irp-cdn.multiscreensite.com/b8033cff/dms3rep/multi/mobile/home-location-icon-1272x1260.png',
                  anchor: new google.maps.Point(32,32),
                  scaledSize: new google.maps.Size(64,64)
                }}
              />
            );
          })

        }
      </GoogleMap>
    );
  }
}

const loadingContainer = (props) => (
  <div className={styles['container']}> Loading </div>
)

export default withRouter(GoogleApiWrapper({
  apiKey: googleMapsAPIKey,
  libraries: ['places', 'visualization'],
  LoadingContainer: loadingContainer,
})(Map));