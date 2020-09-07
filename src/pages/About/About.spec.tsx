import React from 'react';
import {shallow} from 'enzyme';
import About from './About';

it('renders the about page', () => {
  const wrapper = shallow(<About />);
  expect(wrapper.contains(<h1>About page</h1>)).toEqual(true);
});
