import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../Input';

import './profile.scss';

const Profile = ({
  firstNameInput,
  lastNameInput,
  username,
  passwordInput,
  passwordConfirmInput,
  updateFormField,
  loginStatus,
  updateProfile,
  isProfileOpen,
}) => {
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log('Profile Updating');
    updateProfile();
  };

  return (
    <div id="profile" className={isProfileOpen ? 'active' : 'inactive'}>
      <p className="header">Editez votre profile</p>
      <form action="">
        <Input
          type="text"
          id="first-name"
          name="first-name"
          placeholder="Prénom"
          value={firstNameInput}
          onChangeFunction={input => updateFormField('firstName', input)}
          disabled={loginStatus === 'connecting'}
          required
        />

        <Input
          type="text"
          id="last-name"
          name="last-name"
          placeholder="Nom"
          value={lastNameInput}
          onChangeFunction={input => updateFormField('lastName', input)}
          disabled={loginStatus === 'connecting'}
          required
        />

        <Input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={username}
          onChangeFunction={input => updateFormField('email', input)}
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
          disabled={false}
          required
        />
        
        <Input
          type="password"
          id="password-confirm"
          name="password-confirm"
          placeholder="Confirmer mot de passe"
          value={passwordConfirmInput}
          onChangeFunction={input => updateFormField('passwordConfirmInput', input)}
          disabled={false}
          required
        />
        <div className="btns">
          <button type="button" className="form-button cancel">Annuler</button>
          <button type="submit" className="form-button" onClick={handleUpdateProfile}>Modifier</button>
        </div>
      </form>
    </div>
  );
}

Profile.propTypes = {
  firstNameInput: PropTypes.string.isRequired,
  lastNameInput: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  loginStatus: PropTypes.string.isRequired,
  passwordConfirmInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  isProfileOpen: PropTypes.func.isRequired,
};

export default Profile;
