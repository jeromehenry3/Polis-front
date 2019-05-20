/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Icon } from 'semantic-ui-react';
import MainPicture from '../../../styles/images/Libertony.jpg';

import './DisplayBuilding.scss';

const DisplayBuilding = ({
  isDisplayBuildingOpen,
  closeAllModals,
  datas,
  loading,
  didUserVote,
  userVote,
  isModifyPanelOpen,
  openModifyPanel,
}) => {
  const {
    address,
    architect,
    architecture,
    builder,
    creationDate,
    delivered,
    description,
    images,
    name,
    planner,
    promoter,
    surface,
    urbanist,
    user,
    id,
  } = datas;


  const handleCloseDataForm = (e) => {
    e.preventDefault();
    closeAllModals();
  };
  const handleDownVote = (e) => {
    e.preventDefault();
    console.log('downvote');
    userVote(id, false);
    openModifyPanel();
  };

  const handleUpVote = (e) => {
    e.preventDefault();
    console.log('upvote');
    userVote(id, true);
  };

  return (
    <div id="DisplayBuilding">
      <div className={isDisplayBuildingOpen ? 'display-donnees open' : 'display-donnees'}>
        <Dimmer active={loading} inverted>
          <Loader inverted />
        </Dimmer>
        <div className="dysplay-donnees_relative">
          <header>
            <div
              className="header-picture"
              style={{
                backgroundImage: `url(${images.length !== 0 ? images[0].path : MainPicture})`,
              }}
            />
            <a href="#" className="renseignement-donnees_close" onClick={handleCloseDataForm}>Fermer</a>
            <div className="header-info">
              <h2 className="header-info-name">{name}</h2>
              <h2 className="header-info-user">Renseigné par <strong>{user.firstName}</strong></h2>
              <h3 className="header-info-address">{address}</h3>
              <div className="header-info-bottom--panel">
                {architecture !== null && <p className="header-info-tag">{architecture.name}</p>}
                {creationDate !== null && <p className="header-info-date">{delivered ? creationDate : `Date de livraison ${creationDate}`}</p>}
                <p className="header-info-surface">{surface ? `${surface} m²` : 'Surface non renseignée'}</p>
              </div>
            </div>
          </header>
          <hr />
          <div className="panel-description">
            <p className="panel-description-title">Le saviez-vous ?</p>
            <p className="panel-description-text">{description || 'aucune description actuellement renseignée'}</p>
          </div>
          <hr />
          <div className="panel-builders">
            <ul>
              <li>
                <p className="construction">Architecte</p>
                <p>{architect || <a>éditer</a>}</p>
              </li>
              <li>
                <p className="construction">Promoteur</p>
                <p>{promoter || <a>éditer</a>}</p>
              </li>
              <li>
                <p className="construction">Constructeur</p>
                <p>{builder || <a>éditer</a>}</p>
              </li>
              <li>
                <p className="amenagement">Aménageur</p>
                <p>{planner || <a>éditer</a>}</p>
              </li>
              <li>
                <p className="amenagement">Urbaniste</p>
                <p>{urbanist || <a>éditer</a>}</p>
              </li>
            </ul>
          </div>
          <hr />
          <footer>
            {
              didUserVote ? (
                <div className="panel-vote">
                  <p>MERCI D'AVOIR VOTÉ !</p>
                </div>
              ) : (
                <div className="panel-vote">
                  <p>VOTER POUR CETTE FICHE</p>
                  <div>
                    <span className="upvote">
                      <a href="" onClick={handleUpVote}>
                        <Icon name="arrow up" />
                      </a>
                    </span>
                    <span className="downvote">
                      <a onClick={handleDownVote}>
                        <Icon name="arrow down" />
                      </a>
                    </span>
                  </div>
                </div>
              )
            }
            <div className="panel-share">
              <p>
                <a href="">
            PARTAGER
                </a>
              </p>
            </div>
          </footer>
          <div className={isModifyPanelOpen ? 'panel-modify visible' : 'panel-modify hidden'}>
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
  datas: PropTypes.object.isRequired,
  isDisplayBuildingOpen: PropTypes.bool.isRequired,
  isModifyPanelOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  didUserVote: PropTypes.bool.isRequired,
  openModifyPanel: PropTypes.func.isRequired,
  userVote: PropTypes.func.isRequired,
};

export default DisplayBuilding;
