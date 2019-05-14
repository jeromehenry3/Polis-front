import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Pins3 from '../../styles/images/pins3.png';
import Input from '../Input';
import Form from '../Form';

import './login.scss';

const Login = ({
  username, passwordInput, updateFormField, connectUser, isConnected, loginMessage, loginStatus,
}) => (
  <div id="login">
    <Form onSubmit={connectUser}>
      {isConnected && <Redirect to="/map" />}
      <p className={`identification-message ${loginStatus}`}>{loginMessage}</p>

      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={username}
        onChangeFunction={input => updateFormField('username', input)}
        disabled={loginStatus === 'connecting'}
        required
      />

      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Mot de passe"
        value={passwordInput}
        onChangeFunction={input => updateFormField('passwordInput', input)}
        disabled={loginStatus === 'connecting'}
        required
      />

      <p className="lost-password-label"><Link to="/lost-password" className="lost-password-link"> J'ai perdu </Link>mon mot de passe </p>

      <button
        type="submit"
        className="inverted-colors form-button"
      >
        Me connecter
      </button>

      <p>Je souhaite <Link to="/signin">m'inscrire</Link> et contribuer à Polis</p>

      <div
        id="login-pin"
        style={{
          backgroundImage: `url(${Pins3})`,
        }}
      >
        <p>ou</p>
      </div>

      <Link to="/map" className="form-button">Entrer en simple visiteur</Link>

    </Form>
  </div>
);

Login.propTypes = {
  username: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  loginMessage: PropTypes.string.isRequired,
  loginStatus: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Login;
