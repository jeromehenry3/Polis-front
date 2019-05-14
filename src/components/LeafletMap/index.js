import React from 'react';
import PropTypes from 'prop-types';
import {
  Map as LeafletMap, TileLayer, Marker, Circle,
} from 'react-leaflet';
import { geolocated } from 'react-geolocated';
import L from 'leaflet';
import { toggleFullScreen, detectIfMobile } from 'src/functions/';
import RenseignementDonnees from '../../containers/RenseignementDonnees';

import Menu from '../../containers/Menu';
import DisplayBuilding from '../../containers/DisplayBuilding';
import Loading from '../Loading';

import './leafletmap.scss';
// pour utiliser des punaises custom
import pins2 from '../../styles/images/Pins-2 40_80.png';
import pins from '../../styles/images/Pins 40_80.png';


// Création de la map avec React Leaflet
class Leaflet extends React.Component {
  // Props: openDataForm, closeAllModals, updateFormField
  myPinUne = L.icon({
    iconUrl: `${pins2}`,
    iconSize: [40, 80], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  myPinDeux = L.icon({
    iconUrl: `${pins}`,
    iconSize: [40, 80], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  componentDidMount() {
    const { getArchitectures, getBuildings, updateFormField } = this.props;
    // eslint-disable-next-line no-unused-expressions
    detectIfMobile() && toggleFullScreen();
    updateFormField('loadingWithLoader', true);
    getBuildings();
    getArchitectures();
  }

  handleRightClick = (e) => {
    const { updateFormField, openDataForm, closeAllModals } = this.props;
    console.log(e.latlng);
    updateFormField('clickedLat', e.latlng.lat);
    updateFormField('clickedLng', e.latlng.lng);
    closeAllModals();
    openDataForm(e.latlng, true);
  };

  handleClickMarker = (e) => {
    const { openDisplayBuilding, closeAllModals } = this.props;
    const { id } = e.target.options;
    closeAllModals();
    openDisplayBuilding(id);
  }

  handleMapReady = () => {
    const { updateFormField } = this.props;
    setTimeout(() => updateFormField('loadingWithLoader', false), 3000);
  }

  render() {
    const { closeAllModals, buildings } = this.props;
    const {
      coords, isGeolocationEnabled,
      center, zoom, userLocalized, updateFormField, loadingWithLoader,
    } = this.props;
    const southWest = L.latLng(-66.51326044311186, -172.26562500000003);
    const northEast = L.latLng(81.92318632602199, 190.54687500000003);
    const bounds = L.latLngBounds(southWest, northEast);
    // const defaultCenter = coords
    //   ? [coords.latitude, coords.longitude]
    //   : [46.7248003746672, 2.9003906250000004];
    // const defaultCenter = coords ? [coords.latitude, coords.longitude] : center;

    if (isGeolocationEnabled && coords && !userLocalized) {
      // eslint-disable-next-line no-unused-expressions
      updateFormField('center', [coords.latitude, coords.longitude]);
      updateFormField('userLocalized', true);
      updateFormField('zoom', 13);
    }

    return (
      <>
        {loadingWithLoader && <Loading />}
        {!loadingWithLoader && <Menu />}
        {!loadingWithLoader && <RenseignementDonnees />}
        {!loadingWithLoader && <DisplayBuilding />}
        <LeafletMap
          center={center}
          zoom={zoom}
          maxZoom={19}
          minZoom={3}
          setView
          attributionControl
          zoomControl={false}
          doubleClickZoom
          scrollWheelZoom
          maxBounds={bounds}
          dragging
          animate
          infinite
          easeLinearity={0.35}
          onContextmenu={this.handleRightClick}
          onClick={closeAllModals}
          whenReady={this.handleMapReady}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          {
            buildings.map(({
              latitude, longitude, delivered, id,
            }) => (
              <Marker
                position={[latitude, longitude]}
                icon={delivered ? this.myPinDeux : this.myPinUne}
                key={id}
                id={id}
                onClick={this.handleClickMarker}
              />
            ))
          }
          {coords !== null && (
            <>
              <Circle
                center={[coords.latitude, coords.longitude]}
                radius={coords.accuracy / 2}
                color="#d98c5f"
                fillColor="#f3b05f"
              />
              <Circle
                center={[coords.latitude, coords.longitude]}
                radius={0.1}
                color="#cc6b33"
                fillColor="#cc6b33"
              />
            </>
          )}
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
  coords: PropTypes.object,
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  isGeolocationAvailable: PropTypes.bool.isRequired,
  isGeolocationEnabled: PropTypes.bool.isRequired,
  positionError: PropTypes.number,
  loadingWithLoader: PropTypes.bool.isRequired,
  userLocalized: PropTypes.bool.isRequired,
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: null,
  watchPosition: true,
})(Leaflet);
