import React, { useEffect } from 'react';
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

  useEffect(() => {
    let element = document.getElementsByClassName("custom-navbar");
    console.log(element);
  });

  return (
    <Container fluid className="p-0 container-background">
      <DarkModeState>
        <Router basename='/mahbubul-haq.github.io'>
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
