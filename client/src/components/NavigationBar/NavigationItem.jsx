import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationItem.module.css';

class NavigationItem extends Component {
  static propTypes = {
    isSelected: PropTypes.boolean,
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
      <div className={styles['nav-item']}>
        {icon}
        <h2>{label}</h2>
      </div>
    );
  }
}

export default NavigationItem;