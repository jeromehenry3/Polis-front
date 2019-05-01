/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Local import
 */
import App from 'src/components/App';
import 'src/styles/index.sass';
// store
import store from 'src/store';

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(rootComponent, document.getElementById('root'));
