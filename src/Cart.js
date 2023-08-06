// Cart.js
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.imageUrl} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
