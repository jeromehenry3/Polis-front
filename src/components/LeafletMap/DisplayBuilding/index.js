/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import MainPicture from '../../../styles/images/Libertony.jpg';

import './DisplayBuilding.scss';

const DisplayBuilding = ({
  isDisplayBuildingOpen,
  closeAllModals,
  address,
  architect, 
  architecture, 
  builder,
  certified, 
  creationDate, 
  delivered, 
  description, 
  id,
  images, 
  latitude,
  longitude,
  name,
  planner,
  promoter,
  surface,
  urbanist,
  user,
}) => {
  const handleCloseDataForm = (e) => {
    e.preventDefault();
    console.log('Dataform closed');
    closeAllModals();
  };

  console.log(images[0].path !== '');

  return (
    <div id="DisplayBuilding">
      <div className={isDisplayBuildingOpen ? 'display-donnees open' : 'display-donnees'}>
        <div className="dysplay-donnees_relative">
          <header>
            <div
              className="header-picture"
              style={{
                backgroundImage: `url(${images[0].path !== '' ? images[0].path : MainPicture})`,
              }}
            />
            <a href="#" className="renseignement-donnees_close" onClick={handleCloseDataForm}>Fermer</a>
            <div className="header-info">
              <h2 className="header-info-name">{name}</h2>
              <h3 className="header-info-address">{address}</h3>
              <div className="header-info-bottom--panel">
                <p className="header-info-tag">{architecture.name}</p>
                <p className="header-info-date">{delivered ? creationDate : `Livraison: ${creationDate}`}</p>
                <p className="header-info-surface">{surface} m²</p>
              </div>
            </div>
          </header>
          <hr />
          <div className="panel-description">
            <p className="panel-description-title">Le saviez-vous ?</p>
            <p className="panel-description-text">{description}</p>
          </div>
          <hr />
          <div className="panel-builders">
            <ul>
              <li>
                <p className="construction">Architecte</p>
                <p>{architect}</p>
              </li>
              <li>
                <p className="construction">Promoteur</p>
                <p>{promoter}</p>
              </li>
              <li>
                <p className="construction">Constructeur</p>
                <p>{builder}</p>
              </li>
              <li>
                <p className="amenagement">Aménageur</p>
                <p>{planner}</p>
              </li>
              <li>
                <p className="amenagement">Urbaniste</p>
                <p>{urbanist}</p>
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
  isDisplayBuildingOpen: PropTypes.bool.isRequired,
};

export default DisplayBuilding;
