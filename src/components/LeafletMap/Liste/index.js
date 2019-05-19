import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image, Message } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

import MainPicture from '../../../styles/images/Libertony.jpg';

import './liste.scss';

class Liste extends Component {
  // {buildings, listData, loading, getBuildingsListData} = this.props;
  // { buildingsData } = getBuildingsListData(buildings);
  // console.log(buildingsData);
  componentDidMount() {
    const { buildings, getBuildingsListData } = this.props;
    getBuildingsListData(buildings);
  }

  render() {
    const { listData, loading } = this.props;
    return (
      <div id="liste">
        {listData && (
          <Card.Group>
            {listData.map(item => (
              <Card key={item.id} className="card">
                <Image
                  src={item.images.length !== 0 ? item.images[0].path : MainPicture}
                  wrapped
                  ui={false}
                  
                />
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Meta>{`${item.architect} ${item.creationDate}`}</Card.Meta>
                  <Card.Description>
                    {item.address}
                  </Card.Description>
                  <div className="panel-builders">
                    <ul>
                      <li>
                        <p className="construction">Surface</p>
                        <p>{item.surface ? `${item.surface} m²` : <a>éditer</a>}</p>
                      </li>
                      <li>
                        <p className="construction">Promoteur</p>
                        <p>{item.promoter || <a>éditer</a>}</p>
                      </li>
                      <li>
                        <p className="construction">Constructeur</p>
                        <p>{item.builder || <a>éditer</a>}</p>
                      </li>
                      <li>
                        <p className="amenagement">Aménageur</p>
                        <p>{item.planner || <a>éditer</a>}</p>
                      </li>
                      <li>
                        <p className="amenagement">Urbaniste</p>
                        <p>{item.urbanist || <a>éditer</a>}</p>
                      </li>
                    </ul>
                  </div>
                </Card.Content>
                {item.description && (
                  <Card.Content extra>
                    {item.description}
                  </Card.Content>
                )}
              </Card>
            ))}
          </Card.Group>
        )}
        {(listData.length === 0) && (
          <Message compact>
            <Message.Header>{loading ? 'Chargement...' : 'Aucun bâtiment trouvé'}</Message.Header>
            {!loading && (
              <p>
              Il n'y a pas de bâtiment enregistré dans la zone observée.
              </p>
            )}
          </Message>
        )
        }
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
}

Liste.propTypes = {
  buildings: PropTypes.array.isRequired,
  listData: PropTypes.array.isRequired,
  getBuildingsListData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Liste;
