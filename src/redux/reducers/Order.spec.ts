import {addToOrder, removeFromOrder} from '../actions/Order';
import order from './Order';

describe('ORDER_ADD', () => {
  it('returns the input value as array when the initial is empty', () => {
    const res = order([], addToOrder(1));
    expect(res).toEqual([1]);
  });

  it('appends to the initial value when it already has elements', () => {
    const res = order([1, 2, 3], addToOrder(4));
    expect(res).toEqual([1, 2, 3, 4]);
  });

  it('allows duplicates', () => {
    const res = order([1, 2, 3], addToOrder(2));
    expect(res).toEqual([1, 2, 3, 2]);
  });
});

describe('ORDER_REMOVE', () => {
  it('returns an empty array if the initial value is empty', () => {
    const res = order([], removeFromOrder(1));
    expect(res).toEqual([]);
  });

  it('removes from the initial value', () => {
    const res = order([1, 2, 3], removeFromOrder(2));
    expect(res).toEqual([1, 3]);
  });

  it('returns the initial value if the input is not found', () => {
    const res = order([1, 2, 3], removeFromOrder(4));
    expect(res).toEqual([1, 2, 3]);
  });
});
