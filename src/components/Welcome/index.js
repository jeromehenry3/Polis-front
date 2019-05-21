import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles et assets
import Logo from 'src/styles/images/logo-saumon.png';
import Background from '../../styles/images/BG-Login-Signin.jpg';
import './welcome.scss';

/**
 * Code
 */
class Welcome extends Component {
  componentDidMount() {
    const { updateFormField } = this.props;
    updateFormField('redirectToLogin', false);
  }

  render() {
    const { children } = this.props;
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
            Du grec ancien πόλις <span>la cité</span>
          </p>

          {children}

        </div>
      </div>
    );
  }
}

Welcome.propTypes = {
  children: PropTypes.object.isRequired,
  updateFormField: PropTypes.func.isRequired,
};

export default Welcome;
