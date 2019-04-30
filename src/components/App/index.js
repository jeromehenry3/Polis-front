/**
 * Import
 */
import React from 'react';
import LeafletMap from '../LeafletMap';
import Signin from '../Signin';

/**
 * Local import
 */
// Composants

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => (
  <>
    {false && <LeafletMap />}
    <Signin />
  </>
);

/**
 * Export
 */
export default App;
