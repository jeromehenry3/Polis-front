import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';  

import './liste.scss';

const Liste = ({buildings, listData, loading, getBuildingsListData}) => {
  
  return (
    <div id="liste">
      <Card.Group>
        <Card className="card">
          <Image src='src/styles/images/flatIron.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
            <Card.Description>
              Flat Iron Building
            </Card.Description>
          </Card.Content>
        </Card>

        <Card className="card">
          <Image src='src/styles/images/flatIron.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
            <Card.Description>
              Flat Iron Building
            </Card.Description>
          </Card.Content>
        </Card>

        <Card className="card">
          <Image src='src/styles/images/flatIron.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
            <Card.Description>
              Flat Iron Building
            </Card.Description>
          </Card.Content>
        </Card>

        <Card className="card">
          <Image src='src/styles/images/flatIron.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
            <Card.Description>
              Flat Iron Building
            </Card.Description>
          </Card.Content>
        </Card>

        <Card className="card">
          <Image src='src/styles/images/flatIron.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
            <Card.Description>
              Flat Iron Building
            </Card.Description>
          </Card.Content>
        </Card>

        <Card className="card">
          <Image src='src/styles/images/flatIron.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
            <Card.Description>
              Flat Iron Building
            </Card.Description>
          </Card.Content>
        </Card>

        <Card className="card">
          <Image src='src/styles/images/flatIron.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
            <Card.Description>
              Statue de la libertony
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      <div className="back-to-map">
        <Link className="back-to-map-btn" to="/map">
          <Icon.Group>
            <Icon name="map outline" />
            <Icon corner name="reply" />
          </Icon.Group>
          Retour à la carte
        </Link>
      </div>
    </div>
  );
}

export default Liste;
