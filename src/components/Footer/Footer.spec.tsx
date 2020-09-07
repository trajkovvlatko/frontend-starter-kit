import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

it('renders the footer', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.contains('Footer')).toEqual(true);
});
