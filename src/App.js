import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Header from './components/Header';
import './styles/App.css';
import TechnicalSkills from './components/TechnicalSkills';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<TechnicalSkills />} />

      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
