import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);
  const [resized, setResized] = useState(false);

  useEffect(() => {
    const navBar = document.querySelector("#nav-container");
    //console.log("called", window.innerWidth, isNavBarExpanded);
    if (isNavBarExpanded) {
      navBar.style.display = "flex";
    } else if (window.innerWidth <= 768) {
      navBar.style.display = "none";
    }
  }, [isNavBarExpanded, resized]);

  useEffect(() => {
    /// add event listener to window resize
    const eventListener = window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        document.querySelector("#nav-container").style.display = "flex";
        setIsNavBarExpanded(false);
        setResized(!resized);
      } else if (window.innerWidth <= 768) {
        setResized(!resized);
      }
    });
    return () => {
      window.removeEventListener("resize", eventListener);
    };
  }, []);

  return (
    <>
      <div id="nav-icon">
        <FaBars
          id="nav-fa-bars"
          onClick={() => {
            setIsNavBarExpanded(!isNavBarExpanded);
          }}
        />
      </div>
      <div id="nav-container-outer">
        <div id="nav-container">
          <div className="nav-items" id="home">
            Home
          </div>
          <div className="nav-items" id="about">
            About
          </div>
          <div className="nav-items" id="skills">
            Skills
          </div>
          <div className="nav-items" id="projects">
            Projects
          </div>
          <div className="nav-items" id="resume">
            Resume
          </div>
          <div className="nav-items" id="contact">
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
