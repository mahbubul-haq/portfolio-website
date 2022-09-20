import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNav from "./components/nav/Nav";

import { BiChevronUp } from "react-icons/bi";
import DarkModeState from "./components/context/DarkModeState";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Skills from "./components/pages/Skills";

function App() {

  useEffect(() => {
    
    const onScroll = () => {
      let element = document.getElementsByClassName("scroll-top")[0];
      let element1 = document.getElementById("outer-container-scroll");
      
      if (
        document.body.scrollTop > 20 ||
        element1.scrollTop > 20
      ) {
        
        element.style.opacity = "1";
        element.style.cursor = "pointer";
        element.style.zIndex = "100";
      } else {
        
        element.style.opacity = "0";
        element.style.cursor = "default";
        element.style.zIndex = "0";
      }
    };
    let element1 = document.getElementById("outer-container-scroll");
    if (element1) element1.addEventListener("scroll", onScroll);
    
    return () => {
      if (element1) element1.removeEventListener("scroll", onScroll);
      
    }
  });

  const scrollTop = () => {
    document.body.scrollTop = 0;
    let element1 = document.getElementById("outer-container-scroll");
    if (element1) element1.scrollTop = 0;

  };

  return (
    <Container
      fluid
      className={
        localStorage.getItem("darkMode") !== "true"
          ? "container-background p-0"
          : "container-background dark-mode-container p-0"
      }
    >
      <DarkModeState>
        <Router basename="/">
          <MyNav />
          <div className="outer-container" id="outer-container-scroll">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="/skills" element={<Skills />} />
              <Route exact path="/experience" element={<Experience />} />
            </Routes>
            <div className="scroll-top" onClick={() => scrollTop()}>
              <BiChevronUp className="fw-4" size={30} />
            </div>
          </div>
        </Router>
      </DarkModeState>
    </Container>
  );
}

export default App;
