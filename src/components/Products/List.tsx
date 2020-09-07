import React, {useState} from 'react';
import ProductItem from './Item';
import store from 'redux/Store';

function ProductsList() {
  const [productIds, setProductIds] = useState<number[]>([]);
  store.subscribe(() => setProductIds(store.getState().order));

  return (
    <div>
      {productIds.map((id: number) => (
        <ProductItem id={id} key={`product-${id}`} />
      ))}
    </div>
  );
}

export default ProductsList;
