import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Form from '../Form';
import { Link } from 'react-router-dom';

import './lostpassword.scss';

const LostPassword = ({
  useremail, updateFormField, connectUser,
}) => (
  <div id="lost-password">
    <Form onSubmit={connectUser}>
      <p className="identification-message">Comment ça se passe pour la perte de Mdp? On en revoie un random avec un lien, l'utilisateur clique et se retrouve sur Polis sur un composant qui lui permet d'en recréer un? Y aurait pas un package de ouf qui nous faciliterait toute cette gestion des utilisateurs des fois?!</p>

      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={useremail}
        onChangeFunction={input => updateFormField('useremail', input)}
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
  useremail: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default LostPassword;
