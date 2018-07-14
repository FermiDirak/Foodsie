import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={style['App']}>
        <header className={style['App-header']}>
          <img src={logo} className={style['App-logo']} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
