/**
 * Import
 */
import React from 'react';
import Loading from '../Loading';
import Alexis from '../../styles/images/Alexis.jpg';
import Tony from '../../styles/images/Libertony.jpg';
import Notfound from '../../styles/images/404.jpg';

// Styles et assets

import './notfound.scss';
/**
 * Code
 */
const App = () => (
  <div
    className="not-found"
    style={{
      backgroundImage: `url(${Tony})`,
    }}
  >
    <h1 id="title">
      404 Page Not Found
      <img src={Notfound} alt="notfound" />
    </h1>
    <img src={Alexis} alt="Alexis" id="alexis" />
  </div>
);

/**
 * Export
 */
export default App;
