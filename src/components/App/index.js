/**
 * Import
 */
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
/**
 * Local import
 */
// Composants

// Containers
import Welcome from 'src/containers/Welcome';
import Signin from 'src/containers/Signin';
import Login from 'src/containers/Login';

// Dumb
import LeafletMap from '../LeafletMap';

// Styles et assets

import './app.scss';
/**
 * Code
 */
const App = () => (
  <Switch>
    <Route
      path="/signin"
      render={() => (
        <Welcome>
          <Signin />
        </Welcome>
      )}
    />

    <Route
      path="/login"
      render={() => (
        <Welcome>
          <Login />
        </Welcome>
      )}
    />

    <Route
      path="/map"
      render={() => (
        <LeafletMap />
      )}
    />
  </Switch>
  // <LeafletMap />
);

/**
 * Export
 */
export default App;
