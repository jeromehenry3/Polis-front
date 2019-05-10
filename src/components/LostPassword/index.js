import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Form from '../Form';
import './lostpassword.scss';

const LostPassword = ({
  username, updateFormField, connectUser,
}) => (
  <div id="lost-password">
    <Form onSubmit={connectUser}>
      <p className="identification-message">Merci de renseigner l'email qui que vous avez utilisé lors de votre inscription à Polis. Nous allons vous envoyer un lien pour définir un nouveau mot de passe.</p>

      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
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
  connectUser: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default LostPassword;
