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
  // email: '', // could be the same as loginInput, shall we merge them ?

  // ******* DISPLAY / ROUTING ********************/
  welcomeView: 'Login', // string: Login || Signin
};

/**
 * Types
 */
export const TOGGLE_WELCOME_VIEW = 'TOGGLE_WELCOME_VIEW';
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_WELCOME_VIEW:
      return {
        ...state,
        welcomeView: action.welcomeView,
        passwordInput: '',
        passwordConfirmInput: '',
      };
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        [action.fieldName]: action.input,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const toggleWelcomeView = welcomeView => ({
  type: TOGGLE_WELCOME_VIEW,
  welcomeView,
});
export const updateFormField = (fieldName, input) => ({
  type: UPDATE_FORM_FIELD,
  fieldName,
  input,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
