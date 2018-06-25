import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Button from '@material-ui/core/Button';

class Header extends Component {
  render() {
    return (
      <header className='Header'>

        {/* Left Side */}
        <div className='nav-portion'>
          <Link to='/' className='link'>
            <img src='http://via.placeholder.com/152x48' />
          </Link>

          <ul className='nav-items'>
            <li>
            <Button className='header-button'>
              <Link to='/map' className='link'>
                Map
              </Link>
              </Button>
            </li>

            <li>
            <Button className='header-button'>
              <Link to='/feed' className='link'>
                Feed
              </Link>
              </Button>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className='nav-portion'>
          <Button className='header-button'>Login</Button>
          <Button className='header-button'>Register</Button>
        </div>

      </header>
    );
  }
}

export default Header;