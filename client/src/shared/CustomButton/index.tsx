import React, { Component } from 'react';

import styles from './Button.block.css';

interface Props {
  onClick: Function;
  text: string;
}

class CustomButton extends Component<Props> {

  render() {
    const { text, onClick } = this.props;
    return (
      <button
        onClick={() => onClick}
        style={styles}
      >
        { text }
      </button>
    );
  }

}

export default CustomButton;
