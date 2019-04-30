import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form';
import Input from '../Input';

import './signin.scss';

const Signin = ({
  goToLogin,
}) => (
  <Form>
    <div className="signin-container_names">
      <Input
        type="text"
        id="last-name"
        name="last-name"
        placeholder="Nom"
      />

      <Input
        type="text"
        id="first-name"
        name="first-name"
        placeholder="Prénom"
      />
    </div>

    <Input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
    />

    <Input
      type="password"
      id="password"
      name="password"
      placeholder="Mot de passe"
    />

    <Input
      type="password"
      id="password-confirm"
      name="password-confirm"
      placeholder="Confirmer votre mot de passe"
    />

    <button type="submit">M'inscrire</button>

    <a onClick={goToLogin}>J'ai déjà mes identifiants</a>
  </Form>
);

Signin.propTypes = {
  goToLogin: PropTypes.func.isRequired,
};

export default Signin;
