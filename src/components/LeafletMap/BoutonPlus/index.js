import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


import './boutonplus.scss';

const BoutonPlus = (closeAllModals, openRenseignementDonnees) => {
  const handleClick = (e) => {
    console.log('bouton d\'ajout clické');
    closeAllModals();
    openRenseignementDonnees();
  };

  return (
    <div id="bouton-plus">
      <Icon
        circular
        inverted
        size="big"
        name="plus"
        onClick={handleClick}
      />
      <svg height="600" width="800">
        <g id="circle-and-text">
          <circle
            id="circle"
            cx="400"
            cy="300"
            r="130"
          />
          <path
            id="arc"
            d="M395 170.1 A 130 130, 0, 1, 0, 400 170 Z"
            stroke="green"
            fill="transparent"
          />
          <text id="circleText" width="500">
            <textPath
              id="circleTextPath"
              href="#arc"
              startOffset="48%"
            >
                Resume
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};


// BoutonPlus.propTypes = {
// };

export default BoutonPlus;
