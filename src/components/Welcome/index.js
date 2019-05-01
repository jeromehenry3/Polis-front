import React from 'react';
import PropTypes from 'prop-types';
// Composants
import Login from 'src/containers/Login';
import Signin from 'src/containers/Signin';


// Styles et assets
import Logo from 'src/styles/images/logo-saumon.png';
import Background from '../../styles/images/BG-Login-Signin.jpg';
import './welcome.scss';

/**
 * Code
 */
const Welcome = ({ welcomeView }) => {

  return (
    <div
      id="welcome"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="welcome-container">
        <h1>
          <img src={Logo} alt="Polis" />
        </h1>
        <p className="welcome-container_subtitle">
          En grec ancien πόλις <span>la cité</span>
        </p>

        {welcomeView === 'Login' && <Login />}
        {welcomeView === 'Signin' && <Signin />}

      </div>
    </div>
  );
};

Welcome.propTypes = {
  welcomeView: PropTypes.string.isRequired,
};

export default Welcome;
