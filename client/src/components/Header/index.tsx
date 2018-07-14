import * as React from 'react';
import { Component } from 'react';

interface Props {
  user?: {
    username: string,
  };
}

interface State {

}

class Header extends Component<Props, State> {
  state = {

  }

  render() {
    return (
      <header>
        This is the header { this.props.user ? this.props.user.username : 'User' }
      </header>
    );
  }
}

export default Header;