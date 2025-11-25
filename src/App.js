import React from 'react';
import Nav from './components/Nav'; 
import './index.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import { books } from './data';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes><Route path="/" element={<Home />} /></Routes>
      <Routes><Route path="/Books" element={<Books books={books} />} /></Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
