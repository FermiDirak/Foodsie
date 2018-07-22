import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationBarItem.module.css';

class NavigationBarItem extends Component {
  static propTypes = {
    isSelected: PropTypes.bool,
    icon: PropTypes.node,
    label: PropTypes.string,
  }

  static defaultProps = {
    isSelected: false,
    icon: null,
    label: 'label',
  }

  render() {
    const { isSelected, icon, label } = this.props;

    return (
      <div className={ isSelected ? styles['container-selected'] : styles['container'] }>
        {icon}
        <h2 className={styles['label']}> {label} </h2>
      </div>
    );
  }
}

export default NavigationBarItem;