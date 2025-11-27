import React from 'react';
import Nav from './components/Nav'; 
import './index.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import { books } from './data';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);
  function addToCart(book) {
    setCart([...cart, book]);

    // METHOD 1: Allow Duplicates
    // const dupeItem = cart.find((item) => +item.id === +book.id);
    // if (dupeItem) {
    //   setCart(cart.map((item) => {
    //     if (item.id === dupeItem.id) {
    //       return {
    //         ...item,
    //         quantity: item.quantity + 1,
    //       };
    //     }
    //     else {
    //       return item;
    //     }
    //   }));
    // }
    // else {
    //   setCart([...cart, {...book, quantity: 1}]);
    // }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes><Route path="/" element={<Home />} /></Routes>
      <Routes><Route path="/books" element={<Books books={books} />} /></Routes>
      <Routes><Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} />} /></Routes>
      <Routes><Route path="/cart" element={<Cart books={books} />} /></Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
