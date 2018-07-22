import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import styles from './MapModal.module.css';
import CloseIcon from 'react-feather/dist/icons/x-square';

class MapModal extends Component {
  static propTypes = {
    children: PropTypes.node,
    redirectURL: PropTypes.string,
  }

  static defaultProps = {
    redirectURL: '/',
  }

  state = {
    redirect: false,
  }

  /** Redirects to redirect url */
  redirect = () => {
    this.setState({ redirect: true });
  }

  onClickModal = (event) => {
    event.stopPropagation();
  }

  render() {
    const { redirectURL, children } = this.props;
    const { redirect } = this.state;

    if (redirect){
      return <Redirect push to={redirectURL} />
    }

    return (
      <div
        className={styles['backdrop']}
        onClick={this.redirect}
      >
        <div
          className={styles['container']}
          onClick={this.onClickModal}
        >

          <div className={styles['header']}>
            <button
              className={styles['close-button']}
              onClick={this.redirect}
            >
              <CloseIcon size={32} />
            </button>
          </div>

          <div className={styles['content']}>
            { children }
          </div>

        </div>
      </div>
    );
  }
}

export default MapModal;