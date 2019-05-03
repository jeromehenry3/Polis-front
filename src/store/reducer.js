/**
 * Initial State
 */
const initialState = {
  // *******FIELDS OF THE LOGIN / SIGNIN FORM******/
  loginInput: '', // string
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

  // email: '', // could be the same as loginInput, shall we merge them ?
};

/**
 * Types
 */
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
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
