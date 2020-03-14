import React, { Component } from 'react';
import {
 Button, Header, Icon, Modal,
} from 'semantic-ui-react';

class ModalMessage extends Component {
  state = { modalOpen: true }

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { modalOpen } = this.state;
    return (
      <Modal basic open={modalOpen} size="small">
        <Header icon="dont" content="Base de données indisponible" />
        <Modal.Content>
          <p>
            Le serveur backend est actuellement en cours de maintenance.
            Les fonctionnalités de connexion, et l'accès aux données architecturales ne sont pas disponibles pour le moment.
          </p>
          <p>
            THOMAS met tout en oeuvre pour rétablir le service au plus vite.
            Le service sera à nouveau disponible dans quelques jours.
            Merci de votre compréhension.
          </p>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button basic color="red" inverted>
            <Icon name="remove" /> No
          </Button> */}
          <Button color="green" inverted onClick={this.handleClose}>
            <Icon name="checkmark" /> OK
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalMessage;
