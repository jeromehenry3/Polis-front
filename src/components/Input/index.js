/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({
  type, id, name, placeholder, value, onChangeFunction, disabled,
}) => {
  const handleFocus = (event) => {
    event.target.classList.add('open');
  };
  const handleChange = (event) => {
    onChangeFunction(event.target.value);
  };

  return (
    <div className="input-container">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onFocus={handleFocus}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className="input"
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
};

Input.propTypes = {
  // *******DATA*******
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  // *******LOGIC*******
  onChangeFunction: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Input;
