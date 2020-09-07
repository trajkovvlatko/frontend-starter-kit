import React from 'react';
import store from 'redux/Store';
import {addToOrder} from 'redux/actions/Order';

function ProductsPicker() {
  const onChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const id = parseInt(e.currentTarget.value);
    store.dispatch(addToOrder(id));
  };

  return (
    <select onChange={onChange}>
      <option></option>
      <option value='1'>Product 1</option>
      <option value='2'>Product 2</option>
      <option value='3'>Product 3</option>
      <option value='4'>Product 4</option>
      <option value='5'>Product 5</option>
    </select>
  );
}

export default ProductsPicker;
