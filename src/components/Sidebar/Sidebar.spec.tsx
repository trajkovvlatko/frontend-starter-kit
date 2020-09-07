import React from 'react';
import {shallow} from 'enzyme';
import Sidebar from './Sidebar';
import {SidebarStateProvider} from 'contexts/SidebarStateContext';
import {BrowserRouter} from 'react-router-dom';
import MainLayout from 'layouts/Main/MainLayout';
import {fireEvent, render} from '@testing-library/react';

it('renders the sidebar', () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper.contains('Sidebar')).toEqual(true);
});

it('adds a toggle button', () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper.find('button').length).toEqual(1);
});

describe('the toggle sidebar button', () => {
  it('toggles the sidebar state on click', () => {
    const TestComponent = () => {
      return (
        <BrowserRouter>
          <SidebarStateProvider>
            <MainLayout />
            <Sidebar />
          </SidebarStateProvider>
        </BrowserRouter>
      );
    };
    const {container} = render(<TestComponent />);
    const btn = container.querySelector('button');
    expect(container.querySelectorAll('.sidebar.active').length).toEqual(1);

    fireEvent.click(btn!);

    expect(container.querySelector('.sidebar.active')).toBeNull();
    expect(container.querySelector('.sidebar')).not.toBeNull();
  });
});
