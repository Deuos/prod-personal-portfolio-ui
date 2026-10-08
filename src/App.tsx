import React from 'react';
import './App.css';
import { Route, Routes, } from "react-router-dom";
//sidebar
//import NavBar from './components/sidebar/Sidebar';
//Routes
//cursor
//Routes
import Home from './components/home/Home';
import AboutMe from './components/aboutme/AboutMe';
import ContactMe from './components/contactme/ContactMe';
import Projects from './components/projects/Projects';
import Photography from './components/photography/Photography';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Photography" element={<Photography />} />
      </Routes>
    </div>
  )
}

export default App;
