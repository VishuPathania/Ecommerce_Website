import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { useCart } from './CartContext';
import './Header.css';

function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <div className="nav">
        <NavLink exact to="/" activeClassName="active-link">HOME</NavLink>
        <NavLink to="/store" activeClassName="active-link">STORE</NavLink>
        <NavLink to="/about" activeClassName="active-link">ABOUT</NavLink> {/* Use NavLink for About */}
        <button>{totalItems} Cart</button>
      </div>
    </header>
  );
}

export default Header;
