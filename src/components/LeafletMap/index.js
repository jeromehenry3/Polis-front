import React from 'react';
import PropTypes from 'prop-types';
import {
  Map as LeafletMap, TileLayer, Marker, Circle,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
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
    iconAnchor: [10, 40],
    // shadowSize:   [50, 64], // size of the shadow
  });

  myPinDeux = L.icon({
    iconUrl: `${pins}`,
    iconSize: [40, 80], // size of the icon
    iconAnchor: [10, 40],
    // shadowSize:   [50, 64], // size of the shadow
  });

  zoomControl = L.control.zoom({
    position: 'bottomright',
  });

  map = React.createRef();

  componentDidMount() {
    const { getArchitectures, getBuildings, updateFormField, closeMenu } = this.props;

    // updateFormField('actualBounds', actualBounds);
    // eslint-disable-next-line no-unused-expressions
    detectIfMobile() && toggleFullScreen();
    getArchitectures();
    closeMenu();
  }

  handleMove = () => {
    const { updateFormField, getBuildings, fetchingBuildings } = this.props;
    const actualBounds = this.map.current.leafletElement.getBounds();
    updateFormField('actualBounds', actualBounds);
    // eslint-disable-next-line no-unused-expressions
    fetchingBuildings || getBuildings(actualBounds);
    updateFormField('fetchingBuildings', true);
  }

  handleRightClick = (e) => {
    const {
      updateFormField, openDataForm, closeAllModals, isConnected,
    } = this.props;

    updateFormField('clickedLat', e.latlng.lat);
    updateFormField('clickedLng', e.latlng.lng);
    closeAllModals();
    // eslint-disable-next-line no-unused-expressions
    isConnected && openDataForm(e.latlng, true);
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
          ref={this.map}
          center={center}
          zoom={zoom}
          maxZoom={21}
          minZoom={3}
          zoomSnap={1}
          markerZoomAnimation={false}
          // zoomAnimation={false}
          // setView
          flyTo
          attributionControl
          zoomControl
          doubleClickZoom
          scrollWheelZoom
          worldCopyJump
          dragging
          animate
          infinite
          inertia
          wheelDebounceTime={200}
          wheelPxPerZoomLevel={100}
          zoomAnimationThreshold={4}
          fadeAnimation
          easeLinearity={0.2}
          onContextmenu={this.handleRightClick}
          onClick={closeAllModals}
          whenReady={this.handleMapReady}
          onZoomEnd={this.handleMove}
          onMoveEnd={this.handleMove}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <MarkerClusterGroup>
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
          </MarkerClusterGroup>
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
  isGeolocationEnabled: PropTypes.bool.isRequired,
  loadingWithLoader: PropTypes.bool.isRequired,
  userLocalized: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

Leaflet.defaultProps = {
  coords: null,
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: null,
  watchPosition: true,
})(Leaflet);
