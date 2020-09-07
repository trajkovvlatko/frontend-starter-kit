import {ORDER_ADD, ORDER_REMOVE} from 'redux/reducers/Order';

export function addToOrder(productId: number) {
  return {
    type: ORDER_ADD,
    productId,
  };
}

export function removeFromOrder(productId: number) {
  return {
    type: ORDER_REMOVE,
    productId,
  };
}
