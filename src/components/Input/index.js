/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import './input.scss';

class Input extends Component {
  // {
  //   type, id, name, placeholder, value, onChangeFunction, disabled,
  // } = this.props
  state = {
    type: this.props.type,
  };

  handleFocus = (event) => {
    event.target.classList.add('open');
  };

  handleChange = (event) => {
    const { onChangeFunction } = this.props;
    onChangeFunction(event.target.value);
  };

  handleReveal = () => {
    this.setState({
      type: this.state.type === 'password' ? 'text' : 'password',
    });
  }

  render() {
    return (
      <div className="input-container">
        <input
          type={this.state.type}
          id={this.props.id}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onFocus={this.handleFocus}
          value={this.props.value}
          onChange={this.handleChange}
          disabled={this.props.disabled}
          className="input"
        />
        <label htmlFor={this.props.id}>{this.props.placeholder}</label>
        {this.props.type === 'password'
        && (
          <Icon
            name={this.state.type === 'password' ? 'eye' : 'eye slash'}
            className="reveal-icon"
            onClick={this.handleReveal}
          />
        )}
      </div>
  );
  }
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
