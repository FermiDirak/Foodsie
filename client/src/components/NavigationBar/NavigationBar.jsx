import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationBar.module.css';

import HeartIcon from 'react-feather/dist/icons/heart';
import LikesIcon from 'react-feather/dist/icons/thumbs-up';

class NavigationBar extends Component {
  static propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape({
      'title': PropTypes.string,
      'icon': PropTypes.node,
    })),
    initialSelected: PropTypes.number,
  }

  static defaultProps = {
    navItems: [
      {
        title: 'Hearts',
        icon: HeartIcon,
      },
      {
        title: 'Likes',
        icon: LikesIcon,
      }
    ],
    initialSelected: 0,
  }

  state = {
    selected: this.props.initialSelected,
  }

  renderNavItem = (navItem, isSelected) => {
    const { title, icon } = navItem;

    return (
      <div className={styles['nav-item']}>
        <LikesIcon/>
        <h2>{title}</h2>
      </div>
    );
  }

  render() {
    const { navItems } = this.props;
    const { selected } = this.state;

    return (
      <nav className={styles.container}>
        {
          navItems.map((navItem, i) => {
            const isSelected = selected === i;

            return this.renderNavItem(navItem, isSelected);
          })
        }
      </nav>
    );
  }
}

export default NavigationBar;