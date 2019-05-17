import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ViewToggler from 'src/containers/ViewToggler';
import BurgerNav from 'src/containers/BurgerNav';

import './liste.scss';

const Liste = () => (
  <div id="liste">
    <BurgerNav />
    <ViewToggler />
    <Card.Group>
      <Card className="card">
        <Image src="src/styles/images/flatIron.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses,Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
          <Card.Description>
              Flat Iron Building
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src="src/styles/images/flatIron.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
          <Card.Description>
              Flat Iron Building
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src="src/styles/images/flatIron.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
          <Card.Description>
              Flat Iron Building
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src="src/styles/images/flatIron.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
          <Card.Description>
              Flat Iron Building
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src="src/styles/images/flatIron.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
          <Card.Description>
              Flat Iron Building
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src="src/styles/images/flatIron.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
          <Card.Description>
              Flat Iron Building
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src="src/styles/images/flatIron.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>14, Rue Pascal, Gentilly, Arrondissement de L'Haÿ-les-Roses, Val-de-Marne, Île-de-France, France métropolitaine, 94250, France</Card.Header>
          <Card.Description>
              Statue de la libertony
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
);

export default Liste;
