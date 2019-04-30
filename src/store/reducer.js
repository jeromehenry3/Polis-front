/**
 * Initial State
 */
const initialState = {
  loginInput: '', // string
  passwordInput: '', // string
  welcomeView: 'Login',
};

/**
 * Types
 */
export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const TOGGLE_WELCOME_VIEW = 'TOGGLE_WELCOME_VIEW';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_INPUT:
      return {
        ...state,
        loginInput: action.input,
      };
    case CHANGE_PASSWORD_INPUT:
      return {
        ...state,
        passwordInput: action.input,
      };
    case TOGGLE_WELCOME_VIEW:
      return {
        ...state,
        welcomeView: action.welcomeView,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeLoginInput = input => ({
  type: CHANGE_LOGIN_INPUT,
  input,
});
export const changePasswordInput = input => ({
  type: CHANGE_PASSWORD_INPUT,
  input,
});
export const toggleWelcomeView = welcomeView => ({
  type: TOGGLE_WELCOME_VIEW,
  welcomeView,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
