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
              <Route path="/" element={<Home />} />
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

const StoreComponent = () => (
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

const Concert = ({ title, date, imageUrl }) => (
  <div className="concert">
    <h2>{title}</h2>
    <p>Date: {date}</p>
    <img src={imageUrl} alt={title} />
    <button>Book Ticket</button>
  </div>
);

function Home() {
  return (
    <div className="home">
      <Concert
        title="Rock Concert"
        date="August 15, 2023"
        imageUrl="https://cdn.vectorstock.com/i/1000x1000/17/23/lets-rock-music-print-graphic-design-with-guitar-vector-23381723.webp"
      />
      <Concert
        title="Jazz Night"
        date="September 2, 2023"
        imageUrl="https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887_1280.jpg"
      />
      <Concert
        title="Pop Fest"
        date="October 10, 2023"
        imageUrl="https://www.shutterstock.com/image-vector/pop-music-vintage-3d-vector-600w-1427685572.jpg"
      />
    </div>
  );
}

export default App;
