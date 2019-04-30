import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form';
import Input from '../Input';

import './signin.scss';

const Signin = ({
  firstNameInput, lastNameInput, loginInput, passwordInput, passwordConfirmInput,
  goToLogin, updateFormField,
}) => (
  <Form>
    <div className="signin-container_names">
      <Input
        type="text"
        id="last-name"
        name="last-name"
        placeholder="Nom"
        value={firstNameInput}
        onChangeFunction={input => updateFormField('lastNameInput' ,input)}
      />

      <Input
        type="text"
        id="first-name"
        name="first-name"
        placeholder="Prénom"
        value={lastNameInput}
        onChangeFunction={input => updateFormField('firstNameInput' ,input)}
      />
    </div>

    <Input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      value={loginInput}
      onChangeFunction={input => updateFormField('loginInput' ,input)}
    />

    <Input
      type="password"
      id="password"
      name="password"
      placeholder="Mot de passe"
      value={passwordInput}
      onChangeFunction={input => updateFormField('passwordInput' ,input)}
    />

    <Input
      type="password"
      id="password-confirm"
      name="password-confirm"
      placeholder="Confirmer votre mot de passe"
      value={passwordConfirmInput}
      onChangeFunction={input => updateFormField('passwordConfirmInput' ,input)}
    />

    <button type="submit">M'inscrire</button>

    <a onClick={goToLogin}>J'ai déjà mes identifiants</a>
  </Form>
);

Signin.propTypes = {
  // FORM FIELDS
  firstNameInput: PropTypes.string.isRequired,
  lastNameInput: PropTypes.string.isRequired,
  loginInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  passwordConfirmInput: PropTypes.string.isRequired,
  // FUNCTIONS
  goToLogin: PropTypes.func.isRequired,
  updateFormField: PropTypes.func.isRequired,
};

export default Signin;
