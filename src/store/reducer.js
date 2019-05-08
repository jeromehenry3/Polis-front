/* eslint-disable no-case-declarations */
/**
 * Initial State
 */
import tokenEnDur from 'src/data/tokenEnDur';

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


  // ************MANAGEMENT OF THE MODALS************/
  // bool qui indique si le formulaire de renseignement de données est ouvert ou non
  isDataFormOpen: false,
  isDisplayBuildingOpen: false, // bool qui toggle l'ouverture de displayBuilding


  // ************MANAGEMENT OF THE MENU**************/
  searchInput: '', // string


  // ************FIELDS OF THE CARD DATA TO SEND*************/
  clickedLat: 0,
  clickedLng: 0,
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
  images: [],
  latitude: 0,
  longitude: 0,
  name: '',
  planner: '',
  promoter: '',
  surface: 0,
  urbanist: '',
  user: { firstName: '', lastName: '' },
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
    case OPEN_DISPLAY_BUILDING:
      return {
        ...state,
        isDisplayBuildingOpen: true,
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
            latitude: action.latitude,
            longitude: action.longitude,
          },
        ],
      };
    case SET_BUILDING_DATAS:
      return {
        ...state,
        [action.key]: action.value,
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

export const createMarker = (latitude, longitude) => ({
  type: CREATE_MARKER,
  latitude,
  longitude,
});

export const setBuildingDatas = (key, value) => ({
  type: SET_BUILDING_DATAS,
  key,
  value,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
