/* eslint-disable no-underscore-dangle */
/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';
import polisApiMiddleware from './polisApiMiddleware';
import extApiMiddleware from './extApiMiddleware';

const appliedMiddlewares = (applyMiddleware(polisApiMiddleware, extApiMiddleware));

/*
 * Code
 */
const devTools = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(appliedMiddlewares);
// createStore
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
