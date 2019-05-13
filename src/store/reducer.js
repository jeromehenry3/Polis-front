/* eslint-disable no-case-declarations */
/**
 * Initial State
 */
import tokenEnDur from 'src/data/tokenEnDur';
import { Flag } from 'semantic-ui-react';

const initialState = {
  // *******FIELDS OF THE LOGIN / SIGNIN FORM******/
  username: '', // string
  passwordInput: '', // string
  passwordConfirmInput: '', // string
  firstNameInput: '', // string
  lastNameInput: '', // string

  // *******MANAGEMENT OF THE CONNECTION************/
  token: tokenEnDur, // string,
  refreshToken: '',
  isConnected: false,
  loginMessage: 'Vous devez vous identifier pour contribuer à Polis',
  loginStatus: 'not-connected', // string : not-connected || connecting || connected, for logic purposes

  // *********MANAGEMENT OF THE GEOLOCALIZATION*********/
  center: [46.7248003746672, 2.9003906250000004], // Center of the map
  zoom: 6, // level of zoom
  userLocalized: false,


  // ************MANAGEMENT OF THE MODALS************/
  // bool qui indique si le formulaire de renseignement de données est ouvert ou non
  isDataFormOpen: false,
  isDisplayBuildingOpen: false, // bool qui toggle l'ouverture de displayBuilding


  // ************MANAGEMENT OF THE MENU**************/
  searchInput: '', // string


  // ************FIELDS OF THE CARD DATA TO SEND*************/
  clickedLat: 0,
  clickedLng: 0,
  fileInput: '',
  nameInput: '',
  surfaceInput: '',
  addressInput: '',
  styleInput: 0,
  dateInput: '',
  architectInput: '',
  promoterInput: '',
  builderInput: '',
  plannerInput: '',
  urbanistInput: '',
  descriptionInput: '',
  loading: false,
  architectures: [],
  buildings: [],


  // ************FIELDS OF THE CARD DATA*******
  address: '',
  architect: '',
  architecture: { id: 0, name: '' },
  builder: '',
  certified: false,
  creationDate: 0,
  delivered: true,
  description: '',
  id: 0,
  images: [
    {
      id: 0,
      path: '',
    },
  ],
  latitude: 0,
  longitude: 0,
  name: '',
  planner: '',
  promoter: '',
  surface: 0,
  urbanist: '',
  user: { firstName: '', lastName: '' },

  // ************ERRORS*******
  signinErrors: [],
  redirectToLogin: false,
    
  datas: {
    address: '',
    architect: '',
    architecture: { id: 0, name: '' },
    builder: '',
    certified: false,
    creationDate: 0,
    delivered: true,
    description: '',
    id: 0,
    images: [
      {
        id: 0,
        path: '',
      },
    ],
    latitude: 0,
    longitude: 0,
    name: '',
    planner: '',
    promoter: '',
    surface: 0,
    urbanist: '',
    user: { firstName: '', lastName: '' },
  },
};

/**
 * Types
 */
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const CONNECT_USER = 'CONNECT_USER'; // Api connection with username && password
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const STORE_TOKEN = 'STORE_TOKEN';
export const CONNECTING_ERROR = 'CONNECTING_ERROR';
export const SIGNIN = 'SIGNIN';
export const SIGNIN_ERRORS = 'SIGNIN_ERRORS';
export const NEW_PASSWORD = 'NEW_PASSWORD';
export const OPEN_DATA_FORM = 'OPEN_DATA_FORM';
export const OPEN_DISPLAY_BUILDING = 'OPEN_DISPLAY_BUILDING';
export const OPEN_DATA_FORM_RESPONSE = 'OPEN_DATA_FORM_RESPONSE';
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';
export const SUBMIT_BUILDING = 'SUBMIT_BULDING';
export const SET_ARCHITECTURES = 'SET_ARCHITECTURES';
export const GET_ARCHITECTURES = 'GET_ARCHITECTURES';
export const GET_BUILDINGS = 'GET_BUILDINGS';
export const SET_BUILDINGS = 'SET_BUILDINGS';
export const CREATE_MARKER = 'CREATE_MARKER';
export const SET_BUILDING_DATAS = 'SET_BUILDING_DATAS';
export const REDIRECT_TO_LOGIN = 'REDIRECT_TO_LOGIN';

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
    case DISCONNECT_USER:
      return {
        ...initialState,
        loginMessage: 'Vous avez bien été déconnecté(e)',
        redirectToLogin: true,
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
    case SIGNIN_ERRORS:
      return {
        ...state,
        signinErrors: action.errors,
      };
    case NEW_PASSWORD:
      return state;
    case OPEN_DATA_FORM:
      return {
        ...state,
        isDataFormOpen: true,
        loading: true,
      };
    case OPEN_DISPLAY_BUILDING:
      return {
        ...state,
        isDisplayBuildingOpen: true,
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

    case CLOSE_ALL_MODALS:
      return {
        ...state,
        isDataFormOpen: false,
        isDisplayBuildingOpen: false,
        // Les futurs modals à fermer
      };
    case SET_ARCHITECTURES:
      return {
        ...state,
        architectures: action.architectures,
      };
    case SET_BUILDINGS:
      return {
        ...state,
        buildings: action.buildings,
      };
    case CREATE_MARKER:
      return {
        ...state,
        buildings: [
          ...state.buildings,
          {
            id: action.datas.id,
            latitude: action.latitude,
            longitude: action.longitude,
            delivered: action.datas.delivered,
          },
        ],
      };
    case SET_BUILDING_DATAS:
      return {
        ...state,
        datas: action.datas,
        loading: false,
      };
    case REDIRECT_TO_LOGIN:
      return {
        ...state,
        redirectToLogin: true,
      };
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
export const disconnect = () => ({
  type: DISCONNECT_USER,
})
export const storeToken = (token, refreshToken) => ({
  type: STORE_TOKEN,
  token,
  refreshToken,
});
export const signin = () => ({
  type: SIGNIN,
});
export const signinErrors = errors => ({
  type: SIGNIN_ERRORS,
  errors,
});
export const newPassword = () => ({
  type: NEW_PASSWORD,
});
export const connectingError = message => ({
  type: CONNECTING_ERROR,
  message,
});
export const openDataForm = position => ({
  type: OPEN_DATA_FORM,
  position,
});
export const openDisplayBuilding = id => ({
  type: OPEN_DISPLAY_BUILDING,
  id,
});
export const openDataFormResponse = data => ({
  type: OPEN_DATA_FORM_RESPONSE,
  data,
});

export const closeAllModals = () => ({
  type: CLOSE_ALL_MODALS,
});

export const getArchitectures = () => ({
  type: GET_ARCHITECTURES,
});

export const setArchitectures = architectures => ({
  type: SET_ARCHITECTURES,
  architectures,
});

export const getBuildings = () => ({
  type: GET_BUILDINGS,
});

export const setBuildings = buildings => ({
  type: SET_BUILDINGS,
  buildings,
});

export const submitBuilding = () => ({
  type: SUBMIT_BUILDING,
});

export const createMarker = (latitude, longitude, datas) => ({
  type: CREATE_MARKER,
  latitude,
  longitude,
  datas,
});

export const setBuildingDatas = datas => ({
  type: SET_BUILDING_DATAS,
  datas,
});

export const redirectToLogin = () => ({
  type: REDIRECT_TO_LOGIN,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
