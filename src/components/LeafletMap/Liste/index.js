import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
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
    const { listData } = this.props;
    return (
      <div id="liste">
        {listData && (
          <Card.Group>
            {listData.map(item => (
              <Card key={item.id} className="card">
                <Image
                  src={item.images.length !== 0 ? item.images[0].path : MainPicture}
                  wrapped
                  // ui={false}
                  
                />
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Description>
                    {item.address}
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        )}
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
};

export default Liste;
