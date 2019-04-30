/**
 * Import
 */
import React from 'react';
/**
 * Local import
 */
// Composants
import Logo from 'src/styles/images/logo-saumon.png';
// Styles et assets
import './styles.scss';

/**
 * Code
 */
const Login = () => {

  // Je récupère le focus d'un input
  const handleFocus = (e) => {
    // J'ajoute la classe focus à l'élément focus, ce qui passe sa bordure en orange.
    e.target.previousSibling.classList.add('open', 'focus');
    e.target.classList.add('focus');
  };

  // Je récupère le blur d'un input
  const handleBlur = (e) => {
    // Je remove la classe focus, ce qui redonnera à l'élément la bordure de base
    e.target.previousSibling.classList.remove('focus');
    e.target.classList.remove('focus');
  };

  return (
    <div className="signin">
      <div className="signin-container">


        <h1><img src={Logo} alt="Polis" /></h1>
        <p className="signin-container_subtitle">En grec ancien πόλις <span>la cité</span></p>


        <form action="">

          <p>Vous devez vous identifier pour contribuer à Polis</p>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" onClick={handleFocus} onBlur={handleBlur} />
          </div>

          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" placeholder="Mot de passe" onClick={handleFocus} onBlur={handleBlur} />
          </div>

          <p className="lost-password">
            <a href="#">J'ai perdu</a> mon mot de passe
          </p>

          <button type="submit" className="inverted-colors">Me connecter</button>

          <p>Je souhaite <a href="">m'inscrire</a> et contribuer à Polis</p>

          <div className="ou-pin-div">
            <p>ou</p>
          </div>

          <button type="submit">Entrer en simple visiteur</button>

        </form>

      </div>
    </div>
  );
};

/**
 * Export
 */
export default Login;
