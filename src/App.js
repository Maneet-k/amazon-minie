import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
