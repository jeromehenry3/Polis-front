import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu, Dropdown, Button, Icon,
} from 'semantic-ui-react';

import './menu.scss';

const TopMenu = ({
  searchInput, openDataForm, closeAllModals, autoComplete, autoCompleteResults,
  updateFormField, centerByAddress, isAutocompleteOpen, findAddressSearch,
}) => {
  const handleSearch = position => (e) => {
    updateFormField('searchInput', e.target.textContent);
    centerByAddress(position);
  };

  return (
    <div id="menu">
      <Dropdown item icon="bars" simple>
        <Dropdown.Menu>
          <Dropdown.Item>Déconnexion</Dropdown.Item>
          <Dropdown.Item>Mon compte</Dropdown.Item>
          <Dropdown.Item>Recrutement</Dropdown.Item>
          <Dropdown.Item>A propos</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu>
        <Button.Group>
          <Button active>Carte</Button>
          <Button className="no-border-left">Bâtiments</Button>
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
        onClick={() => {
          closeAllModals(); openDataForm(false);
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
  autoCompleteResults: PropTypes.bool.isRequired,
  centerByAddress: PropTypes.func.isRequired,
  isAutocompleteOpen: PropTypes.bool.isRequired,
  findAddressSearch: PropTypes.func.isRequired,
};

export default TopMenu;
