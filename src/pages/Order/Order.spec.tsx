import React from 'react';
import {shallow} from 'enzyme';
import Order from './Order';
import ProductsList from 'components/Products/List';
import ProductsSubmit from 'components/Products/Submit';
import ProductsPicker from 'components/Products/Picker';

it('renders the order page', () => {
  const wrapper = shallow(<Order />);
  expect(wrapper.contains(<h1>Order page</h1>)).toEqual(true);
});

it('renders the ProductsList component', () => {
  const wrapper = shallow(<Order />);
  expect(wrapper.contains(<ProductsList />)).toEqual(true);
});

it('renders the ProductsPicker component', () => {
  const wrapper = shallow(<Order />);
  expect(wrapper.contains(<ProductsPicker />)).toEqual(true);
});

it('renders the ProductsSubmit component', () => {
  const wrapper = shallow(<Order />);
  expect(wrapper.contains(<ProductsSubmit />)).toEqual(true);
});
