/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Local import
 */
// Composants
// Styles et assets

import './form.scss';

/**
 * Code
 */
const Form = ({ children, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // Function passed from the containing component.
  };

  return (
    <form action="" onSubmit={handleSubmit} className="form">
      {children}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Form;
