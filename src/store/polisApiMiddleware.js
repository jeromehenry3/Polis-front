import axios from 'axios';

import {
  CONNECT_USER, SIGNIN, SUBMIT_BUILDING, storeToken, connectingError,
} from './reducer';

// eslint-disable-next-line consistent-return
const polisApiMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      next(action);
      axios.post('https://92.243.9.51/api/login', {
        username: store.getState().username,
        password: store.getState().passwordInput,
      })
        .then((response) => {
          console.log(response.data);
          const { token, refresh_token: refreshToken } = response.data;
          store.dispatch(storeToken(token, refreshToken));
        })
        .catch((error) => {
          console.log('erreur :', error.code);
          const message = (error.code === '401' ? 'Identifiant ou mot de passe invalide' : 'Une erreur est survenue, veuillez réessayer');
          store.dispatch(connectingError(message));
        });
      break;
    case SIGNIN:
      next(action);
      axios.post('https://92.243.9.51/api/signin', {
        email: store.getState().username,
        password: store.getState().passwordInput,
        password2: store.getState().passwordConfirmInput,
        firstname: store.getState().firstNameInput,
        lastname: store.getState().lastNameInput,
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
      axios.post('http://92.243.9.51/api/createBuilding', {
        latitude: store.getState().clickedLat,
        longitude: store.getState().clickedLng,
        adresse: store.getState().clickedAdress,
        certified: false,
        delivered: true,
      }, {
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
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
