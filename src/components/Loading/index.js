/**
 * Import
 */
import React from 'react';
/**
 * Local import
 */
// Composants
import Logo from 'src/styles/images/logo-dark.png';

import { shuffleArray } from 'src/functions/';
// Styles et assets
import './loading.scss';

/**
 * Code
 */

const listToShuffle = [
  'floriano',
  'minnea',
  'metro',
  'indiana',
  'megalo',
  'persé',
  'mariano',
  'nikla',

];
const words = shuffleArray(listToShuffle);

const Loading = () => (
  <div id="loading" className="loading bg-color-1">
    <h1>
      <div className="rw-words rw-words-1">
        <span className="color-5">{words[1]}</span>
        <span className="color-5">{words[2]}</span>
        <span className="color-5">{words[3]}</span>
        <span className="color-5">{words[4]}</span>
        <span className="color-5">{words[5]}</span>
        <img src={Logo} alt="Logo Polis" />
      </div>
    </h1>
  </div>
);


/**
 * Export
 */
export default Loading;
