import axios from 'axios';

import {
  OPEN_DATA_FORM,
  openDataFormResponse,
  FIND_ADDRESS,
  centerByAddress,
  updateFormField,
  AUTO_COMPLETE,
  autoCompleteResults,
  openAutocomplete,
  FIND_ADDRESS_SEARCH,

} from './reducer';

// eslint-disable-next-line consistent-return
const extApiMiddleware = store => next => (action) => {
  switch (action.type) {
    case OPEN_DATA_FORM:
      next(action);
      axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${action.position.lat}&lon=${action.position.lng}&format=json&addressdetails=1`)
        .then((response) => {
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
    case FIND_ADDRESS:
      axios.get(`https://api-adresse.data.gouv.fr/search/?q=${store.getState().addressInput}`)
        .then((response) => {
          const position = response.data.features[0].geometry.coordinates;
          store.dispatch(centerByAddress([position[1], position[0]]));
          store.dispatch(updateFormField('clickedLat', position[1]));
          store.dispatch(updateFormField('clickedLng', position[0]));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FIND_ADDRESS_SEARCH:
      axios.get(`https://api-adresse.data.gouv.fr/search/?q=${store.getState().searchInput}`)
        .then((response) => {
          const position = response.data.features[0].geometry.coordinates;
          store.dispatch(centerByAddress([position[1], position[0]]));
          store.dispatch(updateFormField('clickedLat', position[1]));
          store.dispatch(updateFormField('clickedLng', position[0]));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case AUTO_COMPLETE:
      store.dispatch(updateFormField('searchInput', action.value));
      if (action.value !== '') {
        axios.get(`https://api-adresse.data.gouv.fr/search/?q=${store.getState().searchInput}&limit=4`)
          .then((response) => {
            const address = response.data.features;
            store.dispatch(autoCompleteResults(address));
            store.dispatch(openAutocomplete());
          })
          .catch((error) => {
            console.log(error);
          });
      }
      else {
        store.dispatch(autoCompleteResults([]));
      }
      break;
    default:
      return next(action);
  }
};

export default extApiMiddleware;
