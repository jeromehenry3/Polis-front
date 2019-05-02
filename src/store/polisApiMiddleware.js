import axios from 'axios';

import { CONNECT_USER } from './reducer';

// eslint-disable-next-line consistent-return
const polisApiMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      next(action);
      console.log('je suis dans le middleware');
      axios.post('http://92.243.9.51/api/signin', {
        email: 'jerome@clement2.com',
        password: '12345678',
        password2: '12345678',
        firstname: 'jerome',
        lastname: 'henry',
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
