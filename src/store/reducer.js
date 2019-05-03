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
export const CONNECT_USER = 'CONNECT_USER';
export const SIGNIN = 'SIGNIN';
export const OPEN_DATA_FORM = 'OPEN_DATA_FORM';
export const OPEN_DATA_FORM_RESPONSE = 'OPEN_DATA_FORM_RESPONSE';
export const CLOSE_DATA_FORM = 'CLOSE_DATA_FORM';
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';

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
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
