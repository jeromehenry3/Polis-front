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
  clickedAdress: '', // String contenant l'adresse d'où a cliqué l'utilisateur
  nameInput: '',
  surfaceInput: '',
  adressInput: '',
  styleInput: '',
  dateInput: '',
  architectInput: '',
  promotorInput: '',
  constructorInput: '',
  amenageInput: '',
  urbanistInput: '',
  youknowInput: '',
};

/**
 * Types
 */
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const CONNECT_USER = 'CONNECT_USER';
export const SIGNIN = 'SIGNIN';
export const OPEN_DATA_FORM = 'OPEN_DATA_FORM';
export const CLOSE_DATA_FORM = 'CLOSE_DATA_FORM';
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
      return state;
    case SIGNIN:
      return state;
    case OPEN_DATA_FORM:
      return {
        ...state,
        isDataFormOpen: true,
      };
    case CLOSE_DATA_FORM:
      return {
        ...state,
        isDataFormOpen: false,
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
export const signin = () => ({
  type: SIGNIN,
});

export const openDataForm = position => ({
  type: OPEN_DATA_FORM,
  position,
});

export const closeDataForm = () => ({
  type: CLOSE_DATA_FORM,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
