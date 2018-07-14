import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import Home from "./pages/Home";

import styles from "./App.block.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles}>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
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
