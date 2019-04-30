/**
 * Import
 */
import React from 'react';
/**
 * Local import
 */
// Composants
import Logo from 'src/styles/images/logo-dark.png';
// Styles et assets
import './loading.scss';

/**
 * Code
 */
const Loading = () => (
  <div id="loading" className="loading bg-color-1">
    <div className="test">
      <h1>
        <div className="rw-words rw-words-1">
          <span className="color-5">floriano</span>
          <span className="color-5">minnea</span>
          <span className="color-5">metro</span>
          <span className="color-5">indiana</span>
          <img src={Logo} alt="Logo Polis" />
        </div>
      </h1>
    </div>
  </div>
);

/**
 * Export
 */
export default Loading;


// <span className="color-5">perse</span>
// <span className="color-5">sofia anti</span>
// <span className="color-5">floriano</span>