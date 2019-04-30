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
const Signin = () => {

  // Je récupère le focus d'un input
  const handleFocus = (e) => {
    // J'ajoute la classe focus à l'élément focus, ce qui passe sa bordure en orange.
    e.target.classList.add('focus');
  };

  // Je récupère le blur d'un input
  const handleBlur = (e) => {
    // Je remove la classe focus, ce qui redonnera à l'élément la bordure de base
    e.target.classList.remove('focus');
  };

  return (
    <div className="signin">
      <div className="signin-container">


        <h1><img src={Logo} alt="Polis" /></h1>
        <p className="signin-container_subtitle">En grec ancien πόλις <span>la cité</span></p>


        <form action="">
          <div className="signin-container_names">
            <input type="text" name="last-name" placeholder="Nom" onClick={handleFocus} onBlur={handleBlur} />
            <input type="text" name="first-name" placeholder="Prénom" onClick={handleFocus} onBlur={handleBlur} />
          </div>

          <input type="email" name="email" placeholder="Email" onClick={handleFocus} onBlur={handleBlur} />

          <input type="password" name="password" placeholder="Mot de passe" onClick={handleFocus} onBlur={handleBlur} />

          <input type="password" name="password-confirm" placeholder="Confirmer votre mot de passe" onClick={handleFocus} onBlur={handleBlur} />

          <button type="submit">M'inscrire</button>

          <a href="#">J'ai déjà les identifiants</a>
        </form>

      </div>
    </div>
  );
};

/**
 * Export
 */
export default Signin;
