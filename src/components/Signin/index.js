/**
 * Import
 */
import React from 'react';
/**
 * Local import
 */
// Composants
import Logo from '../../images/logo-saumon.png';
// Styles et assets
import './signin.scss';

/**
 * Code
 */
const Signin = () => (
  <div className="signin">
    <div className="signin-container">
      <h1><img src={Logo} alt="Polis" /></h1>
      <p className="signin-container_subtitle">En grec ancien πόλις <span>la cité</span></p>
      <form action="">
        <div className="signin-container_names">
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénom" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <input type="password" placeholder="Confirmer votre mot de passe" />
        <button type="submit">M'inscrire</button>
        <a href="#">J'ai déjà les identifiants</a>
      </form>
    </div>
  </div>
);

/**
 * Export
 */
export default Signin;
