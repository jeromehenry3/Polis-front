/* eslint-disable no-case-declarations */
/* eslint-disable radix */
import axios from 'axios';

import {
  CONNECT_USER,
  SIGNIN,
  signinErrors,
  FORGOTTEN_PASSWORD,
  SET_NEW_PASSWORD,
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
          console.log(response.data);
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
    case SET_NEW_PASSWORD:
      next(action);
      axios.post(`${polisApi}/resetPassword`, {
        password: action.newPassword,
        password2: action.newPasswordConfirm,
        token: action.token,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case FORGOTTEN_PASSWORD:
      next(action);
      axios.post(`${polisApi}/forgottenPassword`, {
        email: store.getState().username,
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
        address: store.getState().addressInput,
        style: store.getState().architectureInput,
        picture: store.getState().fileInput,
        name: store.getState().nameInput,
        creationDate: parseInt(store.getState().dateInput),
        surface: parseInt(store.getState().surfaceInput),
        architect: store.getState().architectInput,
        promoter: store.getState().promoterInput,
        builder: store.getState().builderInput,
        planner: store.getState().plannerInput,
        urbanist: store.getState().urbanistInput,
        description: store.getState().descriptionInput,
        certified: false,
        delivered: store.getState().dateInput === '' ? true : parseInt(store.getState().dateInput) < date.getFullYear(),
      }, {
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(createMarker(store.getState().clickedLat, store.getState().clickedLng, response.data));
        })
        .catch((error) => {
          console.log(error.message);
          alert('Erreur serveur. Veuillez vérifiez que l\'adresse renseignée est valable.');
        });
      break;
    case GET_ARCHITECTURES:
      axios.get(`${polisApi}/architecture`)
        .then((response) => {
          console.log(response);
          store.dispatch(setArchitectures(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_BUILDINGS:
      axios.get(`${polisApi}/buildings`)
        .then((response) => {
          console.log(response);
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
          console.log(response);

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
