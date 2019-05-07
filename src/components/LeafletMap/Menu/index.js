import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import Input from '../../Input';

import './menu.scss';

const TopMenu = ({ searchInput, updateFormField }) => (
  <div id="menu">
    <Dropdown item icon="bars" simple>
      <Dropdown.Menu>
        <Dropdown.Item>Déconnexion</Dropdown.Item>
        <Dropdown.Divider />
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
        <div className="ui transparent icon input">
          <Input
            className="prompt"
            type="text"
            placeholder="Recherche"
            value={searchInput}
            onChangeFunction={input => updateFormField('searchInput', input)}
          />
          <i className="search link icon" />
        </div>
        <div className="results" />
      </div>
    </Menu.Menu>
  </div>
);


TopMenu.propTypes = {
  searchInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
};

export default TopMenu;
