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
    </div>
  );
};


// BoutonPlus.propTypes = {
// };

export default BoutonPlus;
