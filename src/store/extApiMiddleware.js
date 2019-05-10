import axios from 'axios';

import {
  OPEN_DATA_FORM,
  openDataFormResponse,
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
    default:
      return next(action);
  }
};

export default extApiMiddleware;
