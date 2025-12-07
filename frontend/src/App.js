// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Games from './components/Games';
import Yoga from './components/Yoga';
import Food from './components/Food';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/food" element={<Food />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <div className="container">
            <p className="mb-0">&copy; 2024 Memory Enhancement App. All rights reserved.</p>
            <p className="mb-0 small">Boost your memory, enhance your life.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;