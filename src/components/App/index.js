/**
 * Import
 */
import React from 'react';


/**
 * Local import
 */
// Composants
import Welcome from 'src/containers/Welcome';
import Loading from 'src/components/Loading';
import LeafletMap from '../LeafletMap';
import Signin from '../Signin';
// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = () => ( 

  <Welcome />
  // <LeafletMap />
);

/**
 * Export
 */
export default App;
