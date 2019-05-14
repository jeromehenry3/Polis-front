/* eslint-disable no-case-declarations */
/* eslint-disable radix */
import axios from 'axios';

import {
  CONNECT_USER,
  SIGNIN,
  signinErrors,
  NEW_PASSWORD,
  SUBMIT_BUILDING,
  storeToken,
  connectingError,
  GET_ARCHITECTURES,
  setArchitectures,
  GET_BUILDINGS,
  setBuildings,
  createMarker,
  OPEN_DISPLAY_BUILDING,
  setBuildingDatas,
  redirectToLogin,
} from './reducer';

const polisApi = 'https://www.thomas-gillet.com/api';
// eslint-disable-next-line consistent-return
const polisApiMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      next(action);
      axios.post(`${polisApi}/login`, {
        username: store.getState().username,
        password: store.getState().passwordInput,
      })
        .then((response) => {
          const { token, refresh_token: refreshToken } = response.data;
          store.dispatch(storeToken(token, refreshToken));
        })
        .catch((error) => {
          console.log('erreur :', error.response.data.code);
          const message = (error.response.data.code === 401 ? 'Identifiant ou mot de passe invalide' : 'Une erreur est survenue, veuillez réessayer');
          store.dispatch(connectingError(message));
        });
      break;
    case SIGNIN:
      next(action);
      axios.post(`${polisApi}/signin`, {
        email: store.getState().username,
        password: store.getState().passwordInput,
        password2: store.getState().passwordConfirmInput,
        firstname: store.getState().firstNameInput,
        lastname: store.getState().lastNameInput,
      })
        .then((response) => {
          if (response.data.length === 0) {
            store.dispatch(signinErrors(response.data));
            store.dispatch(redirectToLogin());
            store.dispatch(redirectToLogin());
          }
          store.dispatch(signinErrors(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case NEW_PASSWORD:
      next(action);
      axios.post(`${polisApi}/resetPassword`, {
        password: store.getState().passwordInput,
        password2: store.getState().passwordConfirmInput,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case SUBMIT_BUILDING:
      next(action);
      const date = new Date();

      axios.post(`${polisApi}/createBuilding`, {
        latitude: store.getState().clickedLat,
        longitude: store.getState().clickedLng,
        address: store.getState().addressInput ? store.getState().addressInput : null,
        style: store.getState().architectureInput ? store.getState().architectureInput : null,
        picture: store.getState().fileInput ? store.getState().fileInput : null,
        name: store.getState().nameInput ? store.getState().nameInput : null,
        creationDate: store.getState().dateInput ? parseInt(store.getState().dateInput) : null,
        surface: store.getState().surfaceInput ? parseInt(store.getState().surfaceInput) : null,
        architect: store.getState().architectInput ? store.getState().architectInput : null,
        promoter: store.getState().promoterInput ? store.getState().promoterInput : null,
        builder: store.getState().builderInput ? store.getState().builderInput : null,
        planner: store.getState().plannerInput ? store.getState().plannerInput : null,
        urbanist: store.getState().urbanistInput ? store.getState().urbanistInput : null,
        description: store.getState().descriptionInput ? store.getState().descriptionInput : null,
        certified: false,
        delivered: store.getState().dateInput === '' ? true : parseInt(store.getState().dateInput) < date.getFullYear(),
      }, {
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
      })
        .then((response) => {
          store.dispatch(
            createMarker(store.getState().clickedLat, store.getState().clickedLng, response.data),
          );
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_ARCHITECTURES:
      axios.get(`${polisApi}/architecture`)
        .then((response) => {
          store.dispatch(setArchitectures(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_BUILDINGS:
      next(action);
      axios.post(`${polisApi}/buildings`, { bounds: action.bounds })
        .then((response) => {
          store.dispatch(setBuildings(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case OPEN_DISPLAY_BUILDING:
      next(action);
      axios.get(`${polisApi}/buildings/${action.id}`)
        .then((response) => {
          store.dispatch(setBuildingDatas(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    default:
      return next(action);
  }
};

export default polisApiMiddleware;
