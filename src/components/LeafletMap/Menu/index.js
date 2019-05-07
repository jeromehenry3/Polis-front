import React from 'react';
import { Menu, Dropdown, Icon, Button } from 'semantic-ui-react';
import Input from '../../Input';
import PropTypes from 'prop-types';

import './menu.scss';

const TopMenu = () => (
  <div id="menu">
    {/* <Menu attached='top' borderless secondary> */}
      <Dropdown item icon='bars' simple>
        <Dropdown.Menu>
          <Dropdown.Item>Déconnexion</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Mon compte</Dropdown.Item>
          <Dropdown.Item>Autre chose ...?</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu>
        <Button.Group>
          <Button active>Carte</Button>
          <Button className="no-border-left">Bâtiments</Button>
        </Button.Group>
      </Menu.Menu>

      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <Input className='prompt' type='text' placeholder='Recherche' />
            <i className='search link icon' />
          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
    {/* </Menu> */}
  </div>
);

TopMenu.propTypes = {

};

export default TopMenu;

    {/* <M>
      <M.Item name='home' active={false} onClick={console.log} />
      <M.Item
        name='messages'
        active={false}
        onClick={console.log}
      />
      <M.Item
        name='friends'
        active={false}
        onClick={console.log}
      />
      <M.Menu position='right'>
        <M.Item
          name='logout'
          active={false}
          onClick={console.log}
        />
      </M.Menu>
    </M> */}
