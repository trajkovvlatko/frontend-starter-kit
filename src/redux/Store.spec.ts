import {addToOrder, removeFromOrder} from 'redux/actions/Order';
import configureMockStore, {MockStore} from 'redux-mock-store';
import {ORDER_ADD, ORDER_REMOVE} from 'redux/reducers/Order';

const mockStore = configureMockStore();
let store: MockStore;

beforeEach(() => {
  store = mockStore([]);
});

describe('ORDER_ADD', () => {
  it('dispatches ORDER_ADD action', () => {
    store.dispatch(addToOrder(1));
    expect(store.getActions()).toEqual([{type: ORDER_ADD, productId: 1}]);
  });

  it('dispatches ORDER_ADD multiple times', () => {
    store.dispatch(addToOrder(1));
    store.dispatch(addToOrder(2));
    const expectedPayload = [
      {type: ORDER_ADD, productId: 1},
      {type: ORDER_ADD, productId: 2},
    ];
    expect(store.getActions()).toEqual(expectedPayload);
  });
});

describe('ORDER_REMOVE', () => {
  it("doesn't fail if the store is empty", () => {
    store.dispatch(removeFromOrder(1));
    expect(store.getActions()).toEqual([{type: ORDER_REMOVE, productId: 1}]);
  });

  it('dispatches ORDER_REMOVE multiple times', () => {
    store = mockStore([1, 2, 3]);
    store.dispatch(removeFromOrder(1));
    store.dispatch(removeFromOrder(2));
    expect(store.getActions()).toEqual([
      {type: ORDER_REMOVE, productId: 1},
      {type: ORDER_REMOVE, productId: 2},
    ]);
  });
});
