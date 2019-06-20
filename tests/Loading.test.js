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
});
