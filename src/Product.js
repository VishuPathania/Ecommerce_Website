// Product.js
import React from 'react';
import { useCart } from './CartContext';

const Product = ({ title, price, imageUrl }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        title,
        price,
        imageUrl,
      },
    });
  };

  return (
    <div className="product">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
