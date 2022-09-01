import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);
  const [resized, setResized] = useState(false);
  const [page, setPage] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    var elements = document.getElementsByClassName("nav-items");
    for (var i = 0; i < elements.length; i++) {
      if (i == page) {
        elements[i].classList.add("active");
      } else {
        elements[i].classList.remove("active");
      }
    }
  }, [page]);

  useEffect(() => {
    const navBar = document.querySelector("#nav-container-outer");
    console.log("called", window.innerWidth, isNavBarExpanded);
    if (isNavBarExpanded) {
      navBar.style.display = "block";
    } else if (window.innerWidth <= 768) {
      navBar.style.display = "none";
    }
  }, [isNavBarExpanded, resized]);

  useEffect(() => {
    if (darkMode) {
      document.getElementById("container").classList.add("dark-mode");
      document.getElementById("nav-container").classList.add("dark-mode");
    } else {
      document.getElementById("container").classList.remove("dark-mode");
      document.getElementById("nav-container").classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    /// add event listener to window resize
    const eventListener = window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        document.querySelector("#nav-container-outer").style.display = "block";
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


  const getDarkMode = () => {
    return (
      <div id="dark-mode" className="dark-nav">
          {darkMode ? <BsSun id="dark-mode-icon" onClick={
            () => {
              setDarkMode(!darkMode);
            }
          } /> : <BsMoon id="light-mode-icon" 
          onClick={
            () => {
              setDarkMode(!darkMode);
            }
          } />}
        </div>
    )
  }


  return (
    <>
      <div id="nav-icon">
        {getDarkMode()}
        <FaBars
          id="nav-fa-bars"
          onClick={() => {
            setIsNavBarExpanded(!isNavBarExpanded);
          }}
        />
      </div>
      <div id="nav-container-outer">
        <div id="nav-container">
          <div
            className="nav-items"
            id="home"
            onClick={() => {
              setPage(0);
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className="nav-items"
            id="about"
            onClick={() => {
              setPage(1);
              navigate("/about");
            }}
          >
            About
          </div>
          <div
            className="nav-items"
            id="projects"
            onClick={() => {
              setPage(2);
              navigate("/projects");
            }}
          >
            Projects
          </div>
          <div
            className="nav-items"
            id="resume"
            onClick={() => {
              setPage(3);
              navigate("/resume");
            }}
          >
            Resume
          </div>
          <div className="nav-items" id="contact">
            Contact
          </div>
          <div className="nav-items-dark-mode">{getDarkMode()}</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
