import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';


const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  

  return (
    <div>ProductScreen {productId}</div>
  )
}

export default ProductScreen