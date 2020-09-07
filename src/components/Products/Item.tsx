import React from 'react';
import store from 'redux/Store';
import {removeFromOrder} from 'redux/actions/Order';

interface IProps {
  id: number;
}

function ProductItem(props: IProps) {
  const id = props.id;

  const onRemove = () => {
    store.dispatch(removeFromOrder(id));
  };

  return <div onClick={onRemove}>Product {id}</div>;
}

export default ProductItem;
