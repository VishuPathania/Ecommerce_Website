import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Header from './Header';
import Product from './Product';
import About from './About';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/store" element={<StoreComponent />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
}

const HomeComponent = () => (
  <div>
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
  </div>
);

const StoreComponent = () => (
  <div>
    {/* Render your Store component content here */}
  </div>
);

export default App;
