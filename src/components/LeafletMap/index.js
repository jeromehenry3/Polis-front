import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';
import RenseignementDonnees from '../../containers/RenseignementDonnees';
import './leafletmap.scss';
// pour utiliser des punaises custom
import pins3 from '../../styles/images/pins3.png';
import pins8 from '../../styles/images/Pins8.png';

// Création de la map avec React Leaflet

const Leaflet = ({
  openDataForm, updateFormField,
}) => {
  const handleRightClick = (e) => {
    console.log(e.latlng);
    updateFormField('clickedLat', e.latlng.lat);
    updateFormField('clickedLng', e.latlng.lng);
    openDataForm(e.latlng);
  };
  const myPinUne = L.icon({
    iconUrl: `${pins3}`,
    iconSize:     [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });
  const myPinDeux = L.icon({
    iconUrl: `${pins8}`,
    iconSize:     [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  return (
    <>
      <RenseignementDonnees />
      <LeafletMap
        center={[48.864716, 2.349014]}
        zoom={12}
        maxZoom={19}
        attributionControl
        zoomControl={false}
        doubleClickZoom={false}
        scrollWheelZoom
        dragging
        animate
        easeLinearity={0.35}
        onContextmenu={handleRightClick}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        <Marker
          position={[48.864716, 2.349014]}
          icon={myPinUne}
        >
          <Popup>
            Je suis un pop up à Paris
          </Popup>
        </Marker>
        <Marker
          position={[48.864650, 2.349190]}
          icon={myPinDeux}
        >
          <Popup>
            Je suis un autre pop up à Paris
          </Popup>
        </Marker>
        <Marker
          position={[48.8598, 2.4371999999999616]}
          icon={myPinDeux}
        >
          <Popup>
            Clément habite là
          </Popup>
        </Marker>
      </LeafletMap>
    </>
  );
};

export default Leaflet;
