import axios from 'axios';

import {
  OPEN_DATA_FORM,
  openDataFormResponse,
  FOUND_ADDRESS,
  centerByAddress,
} from './reducer';

// eslint-disable-next-line consistent-return
const extApiMiddleware = store => next => (action) => {
  switch (action.type) {
    case OPEN_DATA_FORM:
      next(action);
      axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${action.position.lat}&lon=${action.position.lng}&format=json&addressdetails=1`)
        .then((response) => {
          console.log(response.data);
          if (response.data.error) {
            console.log('error');
            const data = {
              display_name: 'Impossible de trouver l\'adresse',
            };
            store.dispatch(openDataFormResponse(data));
          }
          else {
            store.dispatch(openDataFormResponse(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FOUND_ADDRESS:
      axios.get(`https://nominatim.openstreetmap.org/search/?q=${store.getState().addressInput}&format=geojson`)
        .then((response) => {
          console.log(response);
          const position = response.data.features[0].geometry.coordinates;
          store.dispatch(centerByAddress([position[1], position[0]]));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      return next(action);
  }
};

export default extApiMiddleware;
