import React from 'react';
import Form from './Form';
import {act, fireEvent, render} from '@testing-library/react';

it('renders the form', () => {
  const mockOnSubmit = jest.fn();
  const {container} = render(<Form onSubmit={mockOnSubmit} />);
  expect(container.querySelector('form')).toBeValid();
});

describe('for invalid input', () => {
  it('renders an error for missing name', async () => {
    const mockOnSubmit = jest.fn();
    const {container} = render(<Form onSubmit={mockOnSubmit} />);

    await act(async () => {
      const message = container.querySelector('input.message');
      message!.setAttribute('value', 'message');
      const form = container.querySelector('form');
      fireEvent.submit(form!);
    });

    expect(container.innerHTML).toContain('Name is required');
    expect(container.innerHTML).not.toContain('Message is required');
    expect(mockOnSubmit).not.toBeCalled();
  });

  it('renders an error for missing message', async () => {
    const mockOnSubmit = jest.fn();
    const {container} = render(<Form onSubmit={mockOnSubmit} />);

    await act(async () => {
      const name = container.querySelector('input.name');
      name!.setAttribute('value', 'name');
      const form = container.querySelector('form');
      fireEvent.submit(form!);
    });

    expect(container.innerHTML).not.toContain('Name is required');
    expect(container.innerHTML).toContain('Message is required');
    expect(mockOnSubmit).not.toBeCalled();
  });
});

describe('for valid input', () => {
  it('calls the submit function', async () => {
    const mockOnSubmit = jest.fn((a) => a);
    const {container} = render(<Form onSubmit={mockOnSubmit} />);

    await act(async () => {
      const name = container.querySelector('input.name');
      name!.setAttribute('value', 'name');

      const message = container.querySelector('input.message');
      message!.setAttribute('value', 'message');

      const form = container.querySelector('form');
      fireEvent.submit(form!);
    });

    expect(container.innerHTML).not.toContain('Name is required');
    expect(container.innerHTML).not.toContain('Message is required');
    expect(mockOnSubmit).toBeCalledTimes(1);
    expect(mockOnSubmit).toHaveReturnedWith({name: 'name', message: 'message'});
  });
});
