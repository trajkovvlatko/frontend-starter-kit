import React from 'react';
import {shallow} from 'enzyme';
import MainLayout from './MainLayout';
import About from 'pages/About/About';
import Home from 'pages/About/About';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import Footer from 'components/Footer/Footer';

it('renders the main layout', () => {
  const layout = shallow(<MainLayout />);
  expect(layout.find(Home)).toHaveLength(1);
  expect(layout.find(About)).toHaveLength(1);
  expect(layout.find(Header)).toHaveLength(1);
  expect(layout.find(Sidebar)).toHaveLength(1);
  expect(layout.find(Footer)).toHaveLength(1);
});
