import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './../../components/Header/Header.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>

          <div>Hello World</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
