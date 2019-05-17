import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Profile from 'src/containers/Profile';

import './burger.scss';
import './burgernav.scss';

const BurgerNav = ({
  isConnected,
  isMenuOpen,
  disconnect,
  updateFormField,
  closeAllModals,
  toggleMenu,
  closeMenu,
  openProfile,
}) => {
  const handleNavLinkClick = () => {
    closeMenu();
  };

  const handleMenuClick = () => {
    closeAllModals();
    toggleMenu();
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    openProfile();
  };

  return (
    <div id="burgernav">
      <button onClick={handleMenuClick} className={isMenuOpen ? 'hamburger hamburger--elastic is-active' : 'hamburger hamburger--elastic'} type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>

      <nav className={isMenuOpen ? 'content-menu open' : 'content-menu'}>
        <ul>
          {isConnected && <NavLink onClick={() => {disconnect(); handleNavLinkClick(); }} to="/login">Déconnexion</NavLink>}
          {!isConnected && (
          <NavLink
            onClick={() => {
              updateFormField('redirectToLogin', true);
              handleNavLinkClick();
            }
            }
            to="/login"
          >Connexion
          </NavLink>
          )}
          {isConnected && <NavLink to="#" onClick={handleProfileClick}>Mon compte</NavLink>}
          <NavLink to="/map" onClick={handleNavLinkClick}>La Carte</NavLink>
          <NavLink to="/about" onClick={handleNavLinkClick}>A propos</NavLink>
        </ul>
      </nav>
      <Profile />
    </div>
  );
};
BurgerNav.propTypes = {
  closeAllModals: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  updateFormField: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  openProfile: PropTypes.func.isRequired,
};

export default BurgerNav;
