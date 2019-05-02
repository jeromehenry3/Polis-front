import axios from 'axios';

import { CONNECT_USER } from './reducer';

// eslint-disable-next-line consistent-return
const polisApiMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      next(action);
      axios.post('http://92.243.9.51/api/login', {
        username: store.getState().username,
        password: store.getState().password,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    default:
      return next(action);
  }
};

export default polisApiMiddleware;
