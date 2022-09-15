import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MyNav from "./components/nav/Nav";

import About from './components/pages/About';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  

  return (
      <Container fluid className='p-0'>
       
        <Router>
          <MyNav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/resume" element={<Resume/>} />
          </Routes>
        </Router>

         
      </Container>
  );
}

export default App;
