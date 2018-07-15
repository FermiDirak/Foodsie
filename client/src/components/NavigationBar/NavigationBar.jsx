import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationBar.module.css';

import HeartIcon from 'react-feather/dist/icons/heart';
import LikesIcon from 'react-feather/dist/icons/thumbs-up';

class NavigationBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.number,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    selected: 0,
    onChange: () => {},
  }

  state = {
    selected: this.props.selected,
  }

  render() {
    const { children } = this.props;
    const { selected } = this.state;

    return (
      <nav className={styles.container}>
        {
          // add onClick listener to each child
          children.map((child) => {
            return child;
          })
        }
      </nav>
    );
  }
}

export default NavigationBar;