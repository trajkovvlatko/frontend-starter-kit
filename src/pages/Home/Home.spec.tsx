import React from 'react';
import {shallow} from 'enzyme';
import Home from './Home';

it('renders the home page', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.contains(<h1>Home page</h1>)).toEqual(true);
});
