import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantModal.module.css';

import MapModal from '../../components/MapModal/MapModal.jsx';

class RestaurantModal extends Component {
  static propTypes = {
    match: PropTypes.shape({
      id: PropTypes.string,
    }),
  };

  render() {
    const { id } = this.props.match.params;

    return (
      <MapModal redirectURL='/'>
        Swag
      </MapModal>
    );
  }
}

export default RestaurantModal;