/**
 * Import
 */
import React from 'react';

import Loading from 'src/components/Loading';

import LeafletMap from '../LeafletMap';
import Signin from '../Signin';


/**
 * Local import
 */
// Composants

// Styles et assets
import './app.sass';
import './app.scss';

/**
 * Code
 */
const App = () => (

  // <Loading />

  <>
    {false && <LeafletMap />}
    <Signin />
  </>
);

/**
 * Export
 */
export default App;
