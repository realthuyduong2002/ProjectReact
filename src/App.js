import React from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import ContactForm from './components/Form';
import Moreinfo from './components/More-info';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<ContactForm />} />
        </Routes>
        <footer className="App-footer">
          <Moreinfo />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;