import React from 'react';
import PropTypes from 'prop-types';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';
import RenseignementDonnees from '../../containers/RenseignementDonnees';
import DisplayBuilding from '../../containers/DisplayBuilding';
import './leafletmap.scss';
// pour utiliser des punaises custom
import pins3 from '../../styles/images/pins3.png';
import pins8 from '../../styles/images/Pins8.png';

// Création de la map avec React Leaflet

class Leaflet extends React.Component {
  // Props: openDataForm, closeAllModals, updateFormField


  myPinUne = L.icon({
    iconUrl: `${pins3}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  myPinDeux = L.icon({
    iconUrl: `${pins8}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  componentDidMount() {
    const { getArchitectures, getBuildings } = this.props;
    getBuildings();
    getArchitectures();
  }

  handleRightClick = (e) => {
    const { updateFormField, openDataForm, closeAllModals } = this.props;
    console.log(e.latlng);
    updateFormField('clickedLat', e.latlng.lat);
    updateFormField('clickedLng', e.latlng.lng);
    closeAllModals();
    openDataForm(e.latlng);
  };

  handleClickMarker = () => {
    const { openDisplayBuilding, closeAllModals } = this.props;
    console.log('marker clicked');
    closeAllModals();
    openDisplayBuilding();
  }

  render() {
    const { closeAllModals, buildings } = this.props;
    const southWest = L.latLng(-66.51326044311186, -172.26562500000003);
    const northEast = L.latLng(81.92318632602199, 190.54687500000003);
    const bounds = L.latLngBounds(southWest, northEast);
    return (
      <>
        <RenseignementDonnees />
        <DisplayBuilding />
        <LeafletMap
          center={[46.7248003746672, 2.9003906250000004]}
          zoom={6}
          maxZoom={19}
          minZoom={3}
          attributionControl
          zoomControl
          doubleClickZoom
          scrollWheelZoom
          maxBounds={bounds}
          dragging
          animate
          infinite
          easeLinearity={0.35}
          onContextmenu={this.handleRightClick}
          onClick={closeAllModals}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          {
            buildings.map(({ latitude, longitude, id }) => (
              <Marker
                position={[latitude, longitude]}
                icon={this.myPinUne}
                key={id}
                onClick={this.handleClickMarker}
              >
                <Popup>
                  Je suis un pop up
                </Popup>
              </Marker>
            ))
          }

        </LeafletMap>
      </>
    );
  }
}

Leaflet.propTypes = {
  closeAllModals: PropTypes.func.isRequired,
  openDataForm: PropTypes.func.isRequired,
  updateFormField: PropTypes.func.isRequired,
  getArchitectures: PropTypes.func.isRequired,
  getBuildings: PropTypes.func.isRequired,
  buildings: PropTypes.arrayOf(PropTypes.object).isRequired,
  openDisplayBuilding: PropTypes.func.isRequired,
};

export default Leaflet;
