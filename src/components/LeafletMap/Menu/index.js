/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  Menu, Button, Icon,
} from 'semantic-ui-react';
import BurgerNav from 'src/containers/BurgerNav';
import ViewToggler from 'src/containers/ViewToggler';

import './menu.scss';

const TopMenu = ({
  searchInput, openDataForm, closeAllModals, autoComplete, autoCompleteResults,
  updateFormField, centerByAddress, isAutocompleteOpen, findAddressSearch, isConnected,
  redirectToLogin, redirect,
}) => {
  const handleSearch = position => (e) => {
    updateFormField('searchInput', e.target.textContent);
    centerByAddress(position);
    closeAllModals();
  };


  return (
    <div id="menu">
      {redirectToLogin && <Redirect to="/login/" />}
      <BurgerNav />
      <ViewToggler />
      <Menu.Menu position="right">
        <div className="ui right aligned category search item">
          <div className={`ui transparent icon input ${searchInput && 'not-empty'}`}>
            <div className="input-container">
              <input
                className="input"
                type="text"
                value={searchInput}
                id="search-input"
                name="search-input"
                placeholder="Rechercher une adresse"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    closeAllModals();
                    findAddressSearch();
                  }
                }}
                onChange={(e) => {
                  autoComplete(e.target.value);
                }}
                onFocus={(event) => {
                  event.target.classList.add('open');
                }}
              />
              <label htmlFor="searchInput">Recherche</label>
            </div>
            <i
              className="search link icon"
              onClick={() => {
                closeAllModals();
                findAddressSearch();
              }}
            />
          </div>
          <div className={isAutocompleteOpen ? 'results transition visible' : 'results transition'}>
            {
              autoCompleteResults.map(address => (
                <p key={address.properties.id} className="result" onClick={handleSearch([address.geometry.coordinates[1], address.geometry.coordinates[0]])}><span className="city">{address.properties.name}</span>, {address.properties.context}</p>
              ))
            }
          </div>
        </div>
      </Menu.Menu>
      <Button
        id="add-button"
        circular
        onClick={isConnected
          ? () => {
            closeAllModals(); openDataForm(false);
          }
          : () => {
            closeAllModals(); redirect();
          }}
      >
        <Icon.Group>
          <Icon name="map marker alternate" />
          <Icon corner name="add" />
        </Icon.Group>
        <svg viewBox="0 0 200 200">
          <g id="g-svg">
            <path
              id="cercle"
              d="
                  M 100, 100
                  m -75, 0
                  a 75,75 0 1,0 150,0
                  a 75,75 0 1,0 -150,0
                  "
              fill="transparent"
            />
            <text id="circleText" fill="#000" fontSize=".9em">
              <textPath id="circleTextPath" href="#cercle"
                startOffset="70%">
                 ajouter
              </textPath>
            </text>
          </g>
        </svg>
      </Button>
    </div>
  );
};


TopMenu.propTypes = {
  searchInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  openDataForm: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  autoComplete: PropTypes.func.isRequired,
  autoCompleteResults: PropTypes.array.isRequired,
  centerByAddress: PropTypes.func.isRequired,
  isAutocompleteOpen: PropTypes.bool.isRequired,
  findAddressSearch: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  redirectToLogin: PropTypes.bool.isRequired,
  redirect: PropTypes.func.isRequired,
};

export default TopMenu;
