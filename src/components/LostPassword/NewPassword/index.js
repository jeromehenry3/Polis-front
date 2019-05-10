import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import Form from '../../Form';

import './newpassword.scss';

const NewPassword = ({
  passwordConfirmInput, passwordInput, updateFormField, newPassword,
}) => (
  <div id="lost-password">
    <Form onSubmit={newPassword}>
      <p className="identification-message">Pour participer à Polis, merci de choisir un nouveau mot de passe.</p>

      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Mot de passe"
        value={passwordInput}
        onChangeFunction={input => updateFormField('passwordInput', input)}
        disabled={false}
      />

      <Input
        type="password"
        id="password-confirm"
        name="password-confirm"
        placeholder="Confirmer votre mot de passe"
        value={passwordConfirmInput}
        onChangeFunction={input => updateFormField('passwordConfirmInput', input)}
        disabled={false}
      />

      <button
        type="submit"
        className="inverted-colors form-button"
      >
        Valider
      </button>

      <Link to="/login" className="back">Retourner à l'accueil</Link>

    </Form>
  </div>
);

NewPassword.propTypes = {
  passwordInput: PropTypes.string.isRequired,
  passwordConfirmInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  newPassword: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default NewPassword;
