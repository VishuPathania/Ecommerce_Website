// App.js
import React from 'react';
import './App.css';
import Cart from './Cart';
import Header from './Header';
import Product from './Product';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main>
          <Product
            title="Colors"
            price={100}
            imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          />
          <Product
            title="Black and White Colors"
            price={50}
            imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
          />
          <Product
            title="Yellow and Black Colors"
            price={70}
            imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
          />
        </main>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
