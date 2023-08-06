// Header.js
import React from 'react';
import { useCart } from './CartContext';
import './Header.css';

function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <div className="nav">
        <button>HOME</button>
        <button>STORE</button>
        <button>ABOUT</button>
        <button>{totalItems} Cart</button>
      </div>
    </header>
  );
}

export default Header;
