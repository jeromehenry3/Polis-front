/* eslint-disable jsx-a11y/label-has-for */
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

import './input.scss';

/**
 * Code
 */
const Input = ({
  type, id, name, placeholder,
}) => {
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
    <div>
      <label htmlFor={id}>{placeholder}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Input;
