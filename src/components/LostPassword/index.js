import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Input from '../Input';
import Form from '../Form';
import './lostpassword.scss';

const LostPassword = ({
  username, updateFormField, forgottenPassword, redirectToLogin, emailError,
}) => (

  <div id="lost-password">
    {redirectToLogin && <Redirect to="/login" />}
    {emailError && (
      <div className="panel-error">
        <p className="current-error">{emailError}</p>
      </div>
    )}
    <Form onSubmit={forgottenPassword}>
      <p className="identification-message">Merci de renseigner l'email qui que vous avez utilisé lors de votre inscription à Polis. Nous allons vous envoyer un lien pour définir un nouveau mot de passe.</p>

      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email *"
        value={username}
        onChangeFunction={input => updateFormField('username', input)}
        disabled={false}
      />

      <button
        type="submit"
        className="inverted-colors form-button"
      >
        Envoyer
      </button>

      <Link to="/login" className="back">Retourner à l'accueil</Link>

    </Form>
  </div>
);

LostPassword.propTypes = {
  username: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  forgottenPassword: PropTypes.func.isRequired,
  redirectToLogin: PropTypes.bool.isRequired,
  emailError: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default LostPassword;
