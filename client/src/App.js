import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.module.css';

console.log(style);

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <header className={style['App-header']}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
