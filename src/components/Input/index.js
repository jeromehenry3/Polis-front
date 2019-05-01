/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({
  type, id, name, placeholder, value, onChangeFunction,
}) => {
  const handleFocus = (event) => {
    event.target.classList.add('open');
  };
  const handleChange = (event) => {
    onChangeFunction(event.target.value);
  };

  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onFocus={handleFocus}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChangeFunction: PropTypes.func.isRequired,
};

export default Input;
