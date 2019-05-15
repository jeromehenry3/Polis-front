/**
 * Import
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
/**
 * Local import
 */
// Composants
import Liste from 'src/components/LeafletMap/Liste/index';
import About from 'src/components/About';
// Containers
import Signin from 'src/containers/Signin';
import Login from 'src/containers/Login';
import LostPassword from 'src/containers/LostPassword';
import NewPassword from 'src/containers/NewPassword';
import LeafletMap from 'src/containers/LeafletMap';
import Welcome from 'src/containers/Welcome';

// Dumb
import NotFound from '../NotFound';
import Loading from '../Loading';
import DisplayBuilding from '../LeafletMap/DisplayBuilding';

// Styles et assets

import './app.scss';
/**
 * Code
 */
const App = () => (
  <Switch>

    <Route
      exact
      path="/"
      render={() => (
        <Redirect to="/login" />
      )}
    />

    <Route
      exact
      path="/about"
      render={() => (
        <About />
      )}
    />

    <Route
      exact
      path="/signin"
      render={() => (
        <Welcome>
          <Signin />
        </Welcome>
      )}
    />

    <Route
      exact
      path="/login"
      render={() => (
        <Welcome>
          <Login />
        </Welcome>
      )}
    />

    <Route
      exact
      path="/lost-password"
      render={() => (
        <Welcome>
          <LostPassword />
        </Welcome>
      )}
    />

    <Route
      exact
      path="/resetpassword/:token"
      render={({ match }) => (
        <Welcome>
          <NewPassword match={match} />
        </Welcome>
      )}
    />

    <Route
      // ROUTE LOADING A ENLEVER PAR LA SUITE
      exact
      path="/loading"
      render={() => (
        <Loading />
      )}
    />

    <Route
      exact
      path="/map"
      render={() => (
        <LeafletMap />
      )}
    />

    <Route
      exact
      path="/display"
      render={() => (
        <DisplayBuilding />
      )}
    />

    <Route
      exact
      path="/liste"
      render={() => (
        <Liste />
      )}
    />

    <Route component={NotFound} />
  </Switch>
  // <LeafletMap />
);

/**
 * Export
 */
export default App;
