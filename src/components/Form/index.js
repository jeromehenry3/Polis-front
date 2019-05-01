/**
 * Import
 */
import React from 'react';


/**
 * Local import
 */
// Composants
// Styles et assets

import './form.scss';

/**
 * Code
 */
const Form = ({ children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

/**
 * Export
 */
export default Form;
