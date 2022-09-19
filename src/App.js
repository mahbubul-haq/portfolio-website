import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MyNav from "./components/nav/Nav";

import DarkModeState from './components/context/DarkModeState';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Skills from './components/pages/Skills';


function App() {

  return (
    
    <Container fluid className={localStorage.getItem("darkMode") !== "true" ? 
      "container-background p-0" : "container-background dark-mode-container p-0"}>
      <DarkModeState>
        <Router basename='/'>
          <MyNav />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/experience" element={<Experience />} />
          </Routes>
        </Router>
      </DarkModeState>
    </Container>
  );
}

export default App;
