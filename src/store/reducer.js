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
};

/**
 * Types
 */
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';

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

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
