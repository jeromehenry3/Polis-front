import React, { Component } from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

import LeafletMap from '../index.js';

export default class DisplayDatasSidebar extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })

  handleShowClick = () => this.setState({ visible: true })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='wide'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
              <LeafletMap />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
