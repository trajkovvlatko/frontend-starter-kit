import React from 'react';
import store from 'redux/Store';

function ProductsSubmit() {
  const onSubmit = () => {
    const productIds = store.getState().order;
    alert(JSON.stringify(productIds));
  };

  return (
    <div>
      <button onClick={onSubmit}>Submit order</button>
    </div>
  );
}

export default ProductsSubmit;
