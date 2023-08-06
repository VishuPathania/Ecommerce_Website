import React, { useState } from 'react';
import './App.css';
import Cart from './Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <header>
        <h1>Ecommerce Website</h1>
        <button onClick={toggleCart}>Cart</button>
      </header>
      <main>
        {/* Your other components and content */}
        {showCart && <Cart />}
      </main>
    </div>
  );
}

export default App;
