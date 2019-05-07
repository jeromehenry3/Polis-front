/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import MainPicture from '../../../styles/images/Libertony.jpg';

import './DisplayBuilding.scss';

const DisplayBuilding = ({ isDisplayBuildingOpen, closeAllModals }) => {
  
  const handleCloseDataForm = (e) => {
    e.preventDefault();
    console.log('Dataform closed');
    closeAllModals();
  };

  return (
    <div id="DisplayBuilding">
      <div className={isDisplayBuildingOpen ? 'display-donnees open' : 'display-donnees'}>
        <div className="dysplay-donnees_relative">
          <header>
            <div
              className="header-picture"
              style={{
                backgroundImage: `url(${MainPicture})`,
              }}
              
            />
            <a href="#" className="renseignement-donnees_close" onClick={handleCloseDataForm}>Fermer</a>
            <div className="header-info">
              <h2 className="header-info-name">Tour Eiffel</h2>
              <h3 className="header-info-address">5, Avenue Anatole France, 75007 Paris, France</h3>
              <div className="header-info-bottom--panel">
                <p className="header-info-tag">Architecture totalitaire</p>
                <p className="header-info-date">Livraison fin 1887</p>
                <p className="header-info-surface">6.5 Ha</p>
              </div>
            </div>
          </header>
          <hr />
          <div className="panel-description">
            <p className="panel-description-title">Le saviez-vous ?</p>
            <p className="panel-description-text">La tour Eiffel est vraiment très jolie. Elle est toute en fer. D'ailleurs c'est même pour cela qu'on l'appelle la dame de fer.</p>
          </div>
          <hr />
          <div className="panel-builders">
            <ul>
              <li>
                <p className="construction">Architecte</p>
                <p>Gustave Eiffel</p>
              </li>
              <li>
                <p className="construction">Promoteur</p>
                <p>Bouygues Immobilier</p>
              </li>
              <li>
                <p className="construction">Constructeur</p>
                <p>La Gustave Eiffel Company</p>
              </li>
              <li>
                <p className="amenagement">Aménageur</p>
                <p>La mairie de Paris</p>
              </li>
              <li>
                <p className="amenagement">Urbaniste</p>
                <p>-</p>
              </li>
            </ul>
          </div>
          <hr />
          <footer>
            <div className="panel-vote">
              <p>VOTER POUR CETTE FICHE</p>
              <span className="upvote">
                <a href="">
                  <Icon name="arrow up" />
                </a>
              </span>
              <span className="downvote">
                <a
                  // onClick={handleDeployBottomPanel}
                >
                  <Icon name="arrow down" />
                </a>
              </span>
            </div>
            <div className="panel-share">
              <p>
                <a href="">
                PARTAGER
                </a>
              </p>
            </div>
          </footer>
          <div className="panel-modify visible">
            <hr />
            <a href=""><p>Modifier des informations sur cette fiche</p></a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

DisplayBuilding.propTypes = {
  closeAllModals: PropTypes.func.isRequired,
  isDisplayBuildingOpen: PropTypes.func.isRequired,
};

export default DisplayBuilding;
