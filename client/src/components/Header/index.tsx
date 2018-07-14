import React, { Component } from 'react';
import objstr from 'obj-str';
import styles from 'header.block.css';

console.log(styles);

interface Props {
  user?: {
    username: string,
  };
}

class Header extends Component<Props> {

  render() {
    const style = objstr({
      [styles]: true,
    });

    return (
      <header className={style}>
        This is the header { this.props.user ? this.props.user.username : 'User' }
      </header>
    );
  }
}

export default Header;