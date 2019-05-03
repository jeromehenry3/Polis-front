import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from '../Form';
import Input from '../Input';

import './signin.scss';

const Signin = ({
  firstNameInput, lastNameInput, username, passwordInput, passwordConfirmInput,
  updateFormField, signin,
}) => (
  <Form onSubmit={signin}>
    <div className="signin-container_names">
      <Input
        type="text"
        id="first-name"
        name="first-name"
        placeholder="Prénom"
        value={firstNameInput}
        onChangeFunction={input => updateFormField('firstNameInput', input)}
      />

      <Input
        type="text"
        id="last-name"
        name="last-name"
        placeholder="Nom"
        value={lastNameInput}
        onChangeFunction={input => updateFormField('lastNameInput', input)}
      />
    </div>

    <Input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      value={username}
      onChangeFunction={input => updateFormField('username', input)}
    />

    <Input
      type="password"
      id="password"
      name="password"
      placeholder="Mot de passe"
      value={passwordInput}
      onChangeFunction={input => updateFormField('passwordInput', input)}
    />

    <Input
      type="password"
      id="password-confirm"
      name="password-confirm"
      placeholder="Confirmer votre mot de passe"
      value={passwordConfirmInput}
      onChangeFunction={input => updateFormField('passwordConfirmInput', input)}
    />

    <button type="submit" className="form-button">M'inscrire</button>

    <Link to="/login">J'ai déjà mes identifiants</Link>
  </Form>
);

Signin.propTypes = {
  // FORM FIELDS
  firstNameInput: PropTypes.string.isRequired,
  lastNameInput: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  passwordConfirmInput: PropTypes.string.isRequired,
  // FUNCTIONS
  updateFormField: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
};

export default Signin;
