import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from "./components/nav/Nav";

import About from './components/pages/About';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  

  return (
    <div id="body">
      <div id="container">
       
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/resume" element={<Resume/>} />
          </Routes>
        </Router>

         
      </div>
    </div>
  );
}

export default App;
