/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

/**
 * Local import
 */
// Composants
// Styles et assets

import './viewtoggler.scss';

/**
 * Code
 */
const ViewToggler = ({ toggleView, view }) => (
  <div id="viewtoggler">
    <Menu.Menu>
      <Button.Group>
        <Button
          active={view === 'map'}
          as={Link}
          onClick={() => toggleView('map')}
          to="/map"
        >
        Carte
        </Button>
        <Button
          active={view === 'list'}
          as={Link}
          onClick={() => toggleView('list')}
          to="/list"
          className="no-border-left"
        >
          Bâtiments
        </Button>
      </Button.Group>
    </Menu.Menu>
  </div>
);


ViewToggler.propTypes = {
  view: PropTypes.string.isRequired,
  toggleView: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default ViewToggler;
