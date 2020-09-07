import React from 'react';
import Wrapper from './Wrapper';
import {act, render} from '@testing-library/react';

it('renders the wrapper component', async () => {
  const mockFetchPromise = Promise.resolve({json: () => Promise.resolve([])});
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  let container: HTMLElement | undefined;
  await act(async () => {
    container = render(<Wrapper />).container;
  });
  if (container) {
    expect(container.firstChild?.nodeName).toEqual('DIV');
  } else {
    throw new Error('Invalid component.');
  }
});

describe('request for a list', () => {
  it("doesn't render the list if the response is empty", async () => {
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve([]),
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    let container: HTMLElement | undefined;
    await act(async () => {
      container = render(<Wrapper />).container;
    });
    if (container) {
      expect(container.querySelector('ul')).toBeNull();
      const lists = Array.from(container.querySelectorAll('li'));
      expect(lists.length).toEqual(0);
    } else {
      throw new Error('Invalid component.');
    }
  });

  it('fetches and renders a list of results', async () => {
    const list = [
      {id: 1, name: 'name 1'},
      {id: 2, name: 'name 2'},
      {id: 3, name: 'name 3'},
    ];
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(list),
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    let container: HTMLElement | undefined;
    await act(async () => {
      container = render(<Wrapper />).container;
    });
    if (container) {
      expect(container.querySelectorAll('ul').length).toEqual(1);
      const lists = Array.from(container.querySelectorAll('li'));
      expect(lists.length).toEqual(3);
      const names = lists.map((l: HTMLElement) => l.innerHTML);
      expect(names).toEqual(list.map((l) => l.name));
    } else {
      throw new Error('Invalid component.');
    }
  });
});
