import React, { Component } from 'react';
import style from './App.module.css';

import { Router, Route } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import Placeholder from '../pages/Placeholder/Placeholder.jsx';


class App extends Component {
  render() {
    return (
      <div className={style['App']}>
        <Header/>
        <Placeholder />
      </div>
    );
  }
}

export default App;
