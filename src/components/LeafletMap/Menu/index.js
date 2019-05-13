import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Button, Icon } from 'semantic-ui-react';
import Input from '../../Input';

import './menu.scss';

const TopMenu = ({ searchInput, updateFormField, openDataForm }) => (
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
          <Input
            type="text"
            id="search-input"
            name="search-input"
            placeholder="Recherche"
            value={searchInput}
            onChangeFunction={input => updateFormField('searchInput', input)}
            disabled={false}
          />
          <i className="search link icon" />
        </div>
        <div className="results" />
      </div>
    </Menu.Menu>
    <Button id="add-button" circular onClick={() => openDataForm(false)}>
      <Icon.Group>
        <Icon name="map marker alternate" />
        <Icon corner name="add" />
      </Icon.Group>
    </Button>
  </div>
);


TopMenu.propTypes = {
  searchInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
};

export default TopMenu;
