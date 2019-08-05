/* eslint-disable no-case-declarations */
/* eslint-disable radix */
import axios from 'axios';

import {
  CONNECT_USER,
  DISCONNECT_USER,
  UPDATE_USER,
  closeProfile,
  profileIsUpdate,
  SIGNIN,
  CHECK_COOKIE,
  autoconnect,
  signinErrors,
  FORGOTTEN_PASSWORD,
  SET_NEW_PASSWORD,
  SUBMIT_BUILDING,
  connectingError,
  GET_ARCHITECTURES,
  setArchitectures,
  GET_BUILDINGS,
  setBuildings,
  createMarker,
  OPEN_DISPLAY_BUILDING,
  setBuildingDatas,
  redirectToLogin,
  resetFormBuilding,
  GET_BUILDINGS_LIST_DATA,
  setBuildingsListData,
  updateFormField,
  emailError,
  newPasswordErrors,
  USER_VOTE,
} from './reducer';

const polisApi = 'https://api.polis-app.fr';
// eslint-disable-next-line consistent-return
const polisApiMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      next(action);
      axios.post(`${polisApi}/login`, {
        username: store.getState().username,
        password: store.getState().passwordInput,
      }, {
        withCredentials: true,
      })

        .then((response) => {
          store.dispatch(updateFormField('usernamer', response.data.email));
          store.dispatch(updateFormField('firstNameInput', response.data.firstname));
          store.dispatch(updateFormField('lastNameInput', response.data.lastname));
          store.dispatch(updateFormField('passwordInput', ''));
          store.dispatch(updateFormField('passwordInputConfirm', ''));
          store.dispatch(updateFormField('userId', response.data.id));
          store.dispatch(updateFormField('isConnected', true));
          store.dispatch(updateFormField('loginMessage', 'Vous êtes connecté(e)'));
          store.dispatch(updateFormField('loginStatus', 'connected'));
          store.dispatch(updateFormField('loadingWithLoader', true));
        })
        .catch((error) => {
          console.log('erreur :', error.response.data.code);
          const message = (error.response.data.code === 401 ? 'Identifiant ou mot de passe invalide' : 'Une erreur est survenue, veuillez réessayer');
          store.dispatch(connectingError(message));
        });
      break;
    case DISCONNECT_USER:
      axios.get(`${polisApi}/logout`, {
        withCredentials: true,
      })
        .then((response) => {
          next(action);
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case UPDATE_USER:
      axios.post(`${polisApi}/profile/update`, {
        firstname: store.getState().firstNameInput,
        lastname: store.getState().lastNameInput,
        email: store.getState().username,
        password: store.getState().passwordInput,
        password2: store.getState().passwordConfirmInput,
      }, {
        withCredentials: true,
      })
        .then((response) => {         
          store.dispatch(profileIsUpdate(response.data));
          setTimeout(() => store.dispatch(closeProfile()), 1500);
          next(action);
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case CHECK_COOKIE:
      next(action);
      axios.get(`${polisApi}/cookie`, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(autoconnect(response.data));
        })
        .catch((error) => {
          console.log(error.message);
          store.dispatch(updateFormField('loginMessage', 'Veuillez vous connecter pour contribuer à Polis.'));
          store.dispatch(updateFormField('isConnected', false));
          setTimeout(() => store.dispatch(updateFormField('loginStatus', 'not-connected')), 1500);
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
      axios.post(`${polisApi}/resetPassword`, {
        password: action.newPassword,
        password2: action.newPasswordConfirm,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          if (typeof response.data === 'object') {
            store.dispatch(newPasswordErrors(response.data));
          }
          else {
            store.dispatch(newPasswordErrors([]));
            next(action);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case FORGOTTEN_PASSWORD:
      axios.post(`${polisApi}/forgottenPassword`, {
        email: store.getState().username,
      })
        .then((response) => {
          // Si l'email renseigné n'existe pas, j'affiche l'erreur à l'utilisateur.
          // Si il existe bien, je laisse passer l'action, qui s'occupe d'indiquer à l'utilisateur que le mail a bien été envoyé.
          if (response.data === 'Veuillez entrer un email valide') {
            store.dispatch(emailError(response.data));
          }
          else {
            next(action);
          }
        })
        .catch((error) => {
          console.log(error);
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
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(createMarker(store.getState().clickedLat, store.getState().clickedLng, response.data));
          store.dispatch(resetFormBuilding());
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
      setTimeout(() => next(action), 500);
      axios.post(`${polisApi}/buildings/screen`, { bounds: action.bounds })
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
          response.data.infoBuilding.votes.forEach((user) => {
            if (user.user.id === store.getState().userId) {
              store.dispatch(updateFormField('didUserVote', true));
            }
          });
          store.dispatch(setBuildingDatas(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_BUILDINGS_LIST_DATA:
      next(action);
      const queries = action.list.map(item => axios.get(`${polisApi}/buildings/${item.id}`));
      axios.all(queries)
        .then((results) => {
          const list = results.map(item => item.data.infoBuilding);
          store.dispatch(setBuildingsListData(list));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case USER_VOTE:
      next(action);
      axios.post(`${polisApi}/vote/${action.id}`, {
        vote: action.vote,
      }, {
        withCredentials: true,
      })
        .then(() => {
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
