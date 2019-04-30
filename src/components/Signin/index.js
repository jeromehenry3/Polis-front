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
    <div className="signin-center">
      <h1><img src={Logo} alt="Polis" /></h1>
      <form action="">
        <div className="signin-names">
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénom" />
        </div>
        <input type="email" />
        <input type="password" />
        <input type="password" />
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
