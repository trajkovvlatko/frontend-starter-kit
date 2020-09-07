import React from 'react';
import './Order.scss';
import ProductsPicker from 'components/Products/Picker';
import ProductsList from 'components/Products/List';
import ProductsSubmit from 'components/Products/Submit';

function Order() {
  return (
    <div className='order-page'>
      <h1>Order page</h1>

      <ProductsList />
      <ProductsPicker />
      <ProductsSubmit />
    </div>
  );
}

export default Order;
