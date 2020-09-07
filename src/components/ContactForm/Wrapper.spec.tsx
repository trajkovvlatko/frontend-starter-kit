import React from 'react';
import {shallow, mount} from 'enzyme';
import Wrapper from './Wrapper';
import {act, render, fireEvent} from '@testing-library/react';

it('renders the contact form', () => {
  const wrapper = shallow(<Wrapper />);
  expect(wrapper.contains('Contact form')).toEqual(true);
});

describe('on submit', () => {
  describe('when an error happens', () => {
    it('shows an error message', async () => {
      const mockFetchPromise = Promise.resolve({json: () => Promise.reject()});

      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      let container: HTMLElement | undefined;
      await act(async () => {
        container = render(<Wrapper />).container;
        const name = container.querySelector('input.name');
        name!.setAttribute('value', 'name');

        const message = container.querySelector('input.message');
        message!.setAttribute('value', 'message');

        fireEvent.submit(container.querySelector('form')!);
      });

      expect(container!.innerHTML).toContain('An error occured.');
    });
  });

  describe('when a successful response happens', () => {
    it('shows a success message', async () => {
      const mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve({success: true}),
      });
      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      let container: HTMLElement | undefined;
      await act(async () => {
        container = render(<Wrapper />).container;
        const name = container.querySelector('input.name');
        name!.setAttribute('value', 'name');

        const message = container.querySelector('input.message');
        message!.setAttribute('value', 'message');

        fireEvent.submit(container.querySelector('form')!);
      });

      expect(container!.innerHTML).not.toContain('An error occured.');
      expect(container!.innerHTML).toContain('Successfully submitted.');
    });
  });
});
