/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import {
  Menu, Dropdown, Button, Icon,
} from 'semantic-ui-react';

import './menu.scss';
import './burger.scss';

const TopMenu = ({
  searchInput, openDataForm, closeAllModals, autoComplete, autoCompleteResults,
  updateFormField, centerByAddress, isAutocompleteOpen, findAddressSearch, isConnected,
  redirectToLogin, disconnect, isMenuOpen, toggleMenu, redirect
}) => {
  const handleSearch = position => (e) => {
    updateFormField('searchInput', e.target.textContent);
    centerByAddress(position);
    closeAllModals();
  };

  const handleMenuClick = () => {
    console.log('clicked');
    closeAllModals();
    toggleMenu();
  };

  return (
    <div id="menu">
      {redirectToLogin && <Redirect to="/login/" />}
      <button onClick={handleMenuClick} className={isMenuOpen ? 'hamburger hamburger--elastic is-active' : 'hamburger hamburger--elastic'} type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>

      <nav className={isMenuOpen ? 'content-menu open' : 'content-menu'}>
        <ul>
          {isConnected && <Dropdown.Item onClick={disconnect}>Déconnexion</Dropdown.Item>}
          {!isConnected && <Dropdown.Item onClick={() => updateFormField('redirectToLogin', true)}>Connexion</Dropdown.Item>}
          {isConnected && <Dropdown.Item>Mon compte</Dropdown.Item>}
          <Dropdown.Item>Recrutement</Dropdown.Item>
          <Dropdown.Item>A propos</Dropdown.Item>
        </ul>
      </nav>

      <Menu.Menu>
        <Button.Group>
          <Button
            active
            as={Link}
            to="/map"
          >
          Carte
          </Button>
          <Button
            as={Link}
            to="/liste"
            className="no-border-left"
          >
            Bâtiments
          </Button>
        </Button.Group>
      </Menu.Menu>

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
  autoCompleteResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  centerByAddress: PropTypes.func.isRequired,
  isAutocompleteOpen: PropTypes.bool.isRequired,
  findAddressSearch: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  disconnect: PropTypes.func.isRequired,
  redirectToLogin: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default TopMenu;
