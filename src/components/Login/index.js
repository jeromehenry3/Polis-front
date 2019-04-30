import React from 'react';
import PropTypes from 'prop-types';

import Pins3 from '../../styles/images/pins3.png';
import Input from '../Input';
import Form from '../Form';

import './login.scss';

const Login = ({
  loginInput, passwordInput, updateFormField, goToSignin,
}) => (
  <Form>
    <p className="identification-message">Vous devez vous identifier pour contribuer à Polis</p>

    <Input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      value={loginInput}
      onChangeFunction={input => updateFormField('loginInput', input)}
    />

    <Input
      type="password"
      id="password"
      name="password"
      placeholder="Mot de passe"
      value={passwordInput}
      onChangeFunction={input => updateFormField('passwordInput', input)}
    />

    <p className="lost-password">
      <a href="#">J'ai perdu</a> mon mot de passe
    </p>

    <button type="submit" className="inverted-colors">Me connecter</button>

    <p>Je souhaite <a onClick={goToSignin}>m'inscrire</a> et contribuer à Polis</p>

    <div
      id="login-pin"
      style={{
        backgroundImage: `url(${Pins3})`,
      }}
    >
      <p>ou</p>
    </div>

    <button type="submit">Entrer en simple visiteur</button>

  </Form>
);

Login.propTypes = {
  loginInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  goToSignin: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Login;
