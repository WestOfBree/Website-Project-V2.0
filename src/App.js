import React from 'react';
import Nav from './components/Nav'; 
import './index.css';
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Featured from './components/Featured';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes><Route path="/" element={<Home />} /></Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
