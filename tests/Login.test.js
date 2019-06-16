import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import { should, expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Login from '../src/components/Login';
import Form from '../src/components/Form';

should();

describe('<Login />', () => {
  const ComponentWrapper = shallow(<Login />);
  // const ComponentMounted = mount(<Login />);
  it('Should have an id "login"', () => {
    ComponentWrapper.props().should.have.property('id').which.equal('login');
  });
  it('Should contain a form', () => {
    expect(ComponentWrapper.render().find(<Form />)).to.have.lengthOf(1);
  });
  // it('Should have a classname "clicked" when <Click /> receives a click event', () => {
  //   ComponentWrapper.props().should.have.property('className').which.is.empty;

  //   ComponentWrapper.simulate('click');

  //   ComponentWrapper.props().should.have.property('className').which.equal('clicked');

  //   // ComponentWrapper.hasClass('clicked');

  //   ComponentWrapper.simulate('click');

  //   ComponentWrapper.props().should.have.property('className').which.is.empty;
  // });
});
