import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import styles from './App.block.css';

// import Header from './components/Header';
import Home from "./pages/Home";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles}>

          {/* <Header /> */}

          <main>
            <Route exact path="/" component={Home} />
          </main>
          <footer>
            Footer
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
