import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';
import './leafletmap.scss';

// Création de la map avec React Leaflet

const Leaflet = () => {
  return (
    <LeafletMap
      center={[48.864716, 2.349014]}
      zoom={6}
      maxZoom={19}
      attributionControl
      zoomControl={false}
      doubleClickZoom={false}
      scrollWheelZoom
      dragging
      animate
      easeLinearity={0.35}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />

      <Marker position={[48.864716, 2.349014]}>
        <Popup>
          Je suis un pop up à Paris
        </Popup>
      </Marker>
    </LeafletMap>
  );
};

export default Leaflet;
