import React from 'react';
import { should } from 'chai';
import { shallow } from 'enzyme';
import Loading from '../src/components/Loading';

should();

describe('<Loading />', () => {
  const ComponentWrapper = shallow(<Loading />);
  it('Should have an id "loading"', () => {
    ComponentWrapper.props().should.have.property('id').which.equal('loading');
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
