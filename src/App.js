import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import verify from './verify';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={() =>
        <div className="App">
          <header className="App-header">
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
      } />
      <Route exact path={process.env.PUBLIC_URL + '/:id'} component={verify} />
    </Fragment>
  );
}

export default App;
