/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/**
 * Import
 */
import React from 'react';
/**
 * Local import
 */
// Composants
import Logo from '../../styles/images/logo-saumon.png';
import Background from '../../styles/images/BG-Login-Signin.jpg';
import Input from '../Input';
import Form from '../Form';
// Styles et assets
import './signin.scss';

/**
 * Code
 */
const Signin = () => (
  <div
    className="login"
    style={{
      backgroundImage: `url(${Background})`,
    }}
  >
    <div className="signin-container">


      <h1><img src={Logo} alt="Polis" /></h1>
      <p className="signin-container_subtitle">En grec ancien πόλις <span>la cité</span></p>


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

        <a href="#">J'ai déjà les identifiants</a>
      </Form>

    </div>
  </div>
);

/**
 * Export
 */
export default Signin;
