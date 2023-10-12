import React from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import ContactForm from './components/Form';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<ContactForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
