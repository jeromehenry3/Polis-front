/* eslint-disable no-case-declarations */
/**
 * Initial State
 */
const initialState = {
  // *******FIELDS OF THE LOGIN / SIGNIN FORM******/
  username: '', // string
  passwordInput: '', // string
  passwordConfirmInput: '', // string
  firstNameInput: '', // string
  lastNameInput: '', // string
  isDataFormOpen: false, // bool qui indique si le formulaire de renseignement de données est ouvert ou non
  token: '', // string,
  refreshToken: '',
  isConnected: false,
  loginMessage: 'Vous devez vous identifier pour contribuer à Polis',
  loginStatus: 'not-connected', // string : not-connected || connecting || connected, for logic purposes

  // ************FIELDS OF THE CARD DATA*******
  isDataFormOpen: false, // bool qui indique si le formulaire de renseignement de données est ouvert
  clickedAdress: '', // String contenant l'adresse d'où a cliqué l'utilisateur // TYPO A CORRIGER PARTOUT*******
  clickedLat: '',
  clickedLng: '',
  nameInput: '',
  surfaceInput: '',
  addressInput: '',
  styleInput: '',
  dateInput: '',
  architectInput: '',
  promotorInput: '',
  constructorInput: '',
  amenageInput: '',
  urbanistInput: '',
  youknowInput: '',
  loading: false,
};

/**
 * Types
 */
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const CONNECT_USER = 'CONNECT_USER'; // Api connection with username && password
export const STORE_TOKEN = 'STORE_TOKEN';
export const CONNECTING_ERROR = 'CONNECTING_ERROR';
export const SIGNIN = 'SIGNIN';
export const OPEN_DATA_FORM = 'OPEN_DATA_FORM';
export const OPEN_DATA_FORM_RESPONSE = 'OPEN_DATA_FORM_RESPONSE';
export const CLOSE_DATA_FORM = 'CLOSE_DATA_FORM';
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';
export const SUBMIT_BUILDING = 'SUBMIT_BULDING';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        [action.fieldName]: action.input,
      };
    case CONNECT_USER:
      return {
        ...state,
        loginMessage: 'Connexion en cours',
        loginStatus: 'connecting',
      };
    case CONNECTING_ERROR:
      return {
        ...state,
        loginMessage: action.message,
        loginStatus: 'not-connected',
      };
    case STORE_TOKEN:
      return {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken,
        isConnected: true,
        loginMessage: 'Vous êtes connecté(e)',
      };
    case SIGNIN:
      return state;
    case OPEN_DATA_FORM:
      return {
        ...state,
        isDataFormOpen: true,
        loading: true,
      };
    case OPEN_DATA_FORM_RESPONSE:
      // eslint-disable-next-line camelcase
      const { display_name } = action.data;
      return {
        ...state,
        addressInput: display_name,
        loading: false,
      };
    case CLOSE_DATA_FORM:
      return {
        ...state,
        isDataFormOpen: false,
      };

    case CLOSE_ALL_MODALS:
      return {
        ...state,
        isDataFormOpen: false,
        // Les futurs modals à fermer
      };
    case SUBMIT_BUILDING:
      return state;
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const updateFormField = (fieldName, input) => ({
  type: UPDATE_FORM_FIELD,
  fieldName,
  input,
});
export const connectUser = () => ({
  type: CONNECT_USER,
});
export const storeToken = (token, refreshToken) => ({
  type: STORE_TOKEN,
  token,
  refreshToken,
});
export const signin = () => ({
  type: SIGNIN,
});
export const connectingError = message => ({
  type: CONNECTING_ERROR,
  message,
});
export const openDataForm = position => ({
  type: OPEN_DATA_FORM,
  position,
});

export const openDataFormResponse = data => ({
  type: OPEN_DATA_FORM_RESPONSE,
  data,
});

export const closeDataForm = () => ({
  type: CLOSE_DATA_FORM,
});

export const closeAllModals = () => ({
  type: CLOSE_ALL_MODALS,
});

export const submitBuilding = () => ({
  type: SUBMIT_BUILDING,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
