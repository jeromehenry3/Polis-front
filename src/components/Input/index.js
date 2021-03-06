/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import './input.scss';

class Input extends Component {
  state = {
    dynamicType: this.props.type,
  };

  handleFocus = (event) => {
    event.target.classList.add('open');
  };

  handleChange = (event) => {
    const { onChangeFunction } = this.props;
    onChangeFunction(event.target.value);
  };

  handleReveal = () => {
    const { dynamicType } = this.state;
    this.setState({
      dynamicType: dynamicType === 'password' ? 'text' : 'password',
    });
  }

  render() {
    const {
      id, name, placeholder, value, disabled, type, required, onBlur,
    } = this.props;
    const { dynamicType } = this.state;
    return (
      <div className="input-container">
        
        <input
          type={dynamicType}
          id={id}
          name={name}
          placeholder={placeholder}
          onFocus={this.handleFocus}
          value={value}
          onChange={this.handleChange}
          disabled={disabled}
          onBlur={onBlur}
          className="input"
          required={required}
        />
        <label htmlFor={id}>{placeholder}</label>
        {type === 'password'
        && (
          <Icon
            name={dynamicType === 'password' ? 'eye' : 'eye slash'}
            className="reveal-icon"
            onClick={this.handleReveal}
          />
        )}
      </div>
    );
  }
}

Input.propTypes = {
  // *******DATA*******
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  // *******LOGIC*******
  onChangeFunction: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

Input.defaultProps = {
  onBlur: null,
  disabled: false,
  required: false,
};

export default Input;
