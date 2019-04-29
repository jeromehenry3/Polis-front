/**
 * Initial State
 */
const initialState = {
  message: 'Hello',
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const doSomething = () => ({
  type: DO_SOMETHING,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
