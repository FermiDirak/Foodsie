import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from "./pages/Home";

import styles from "./App.block.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles}>
          <main>
            <Route exact path="/" component={Home} />
          </main>
          <footer className={styles.footer}>
            Footer
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
