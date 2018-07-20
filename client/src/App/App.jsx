import React, { Component } from 'react';
import style from './App.module.css';

import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import Home from '../pages/Home/Home.jsx';
import Placeholder from '../pages/Placeholder/Placeholder.jsx';


class App extends Component {
  render() {
    return (
      <div className={style['App']}>
        <Header/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/placeholder' component={Placeholder}/>
        </Switch>
      </div>
    );
  }
}

export default App;
