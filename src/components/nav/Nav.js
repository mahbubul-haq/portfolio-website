/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


import "./Nav.css";




const MyNav = () => {
  // const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);
  // const [resized, setResized] = useState(false);
    const [page, setPage] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      if (darkMode) {
        let element = document.getElementsByClassName("container-background");
        if (element && element.length > 0) {
          element[0].classList.add("dark-mode-container");
        }
        element = document.getElementsByClassName("custom-navbar");
        if (element && element.length > 0) {
          element[0].classList.add("dark-mode-navbar");
        }

        element = document.getElementsByClassName("custom-navbar-brand");
        if (element && element.length > 0) {
          element[0].classList.add("color-white");
        }
        element = document.getElementsByClassName("custom-nav-link");
        if (element && element.length > 0) {
          element[0].classList.add("color-white");
        }
        element = document.getElementsByClassName("custom-nav-link");
        //for each on every element in element
        for (let i = 0; i < element.length; i++) {
          element[i].classList.add("color-white");
        }
        element = document.getElementsByClassName("custom-navbar-toggle-icon");
        if (element && element.length > 0) {
          element[0].classList.add("color-white");
        }
      

      }
      else {
           let element = document.getElementsByClassName(
             "container-background"
           );
           if (element && element.length > 0) {
             element[0].classList.remove("dark-mode-container");
           }
           element = document.getElementsByClassName("custom-navbar");
           if (element && element.length > 0) {
             element[0].classList.remove("dark-mode-navbar");
           }

           element = document.getElementsByClassName("custom-navbar-brand");
           if (element && element.length > 0) {
             element[0].classList.remove("color-white");
           }
           element = document.getElementsByClassName("custom-nav-link");
           if (element && element.length > 0) {
             element[0].classList.remove("color-white");
           }
           element = document.getElementsByClassName("custom-nav-link");
           //for each on every element in element
           for (let i = 0; i < element.length; i++) {
             element[i].classList.remove("color-white");
           }

           element = document.getElementsByClassName("custom-navbar-toggle-icon");
            if (element && element.length > 0) {
              element[0].classList.remove("color-white");
            }

      }
    }, [darkMode]);



  return (
    <>
      <Navbar expand="md" className="custom-navbar-navbar" variant="dark">
        <Container fluid className="custom-navbar">
          <Navbar.Brand
            className="custom-navbar-brand"
            role="button"
            onClick={() => {
              setPage(0);
              console.log("clicked");
              navigate("/");
            }}
          >
            Mahbubul Haque
          </Navbar.Brand>
          <Navbar.Toggle
            className="custom-navbar-toggle order-3"
            aria-controls="basic-navbar-nav"
          >
            <FaBars className="custom-navbar-toggle-icon" size={25} />
          </Navbar.Toggle>

          <Navbar.Collapse
            className="custom-navbar-collapse ms-auto order-md-1 order-5"
            id="basic-navbar-nav"
          >
            <Nav className="text-center m-md-auto custom-nav">
              <Nav.Link
                className="custom-nav-link"
                role="button"
                onClick={() => {
                  setPage(1);
                  navigate("/about");
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                className="custom-nav-link"
                role="button"
                onClick={() => {
                  setPage(2);
                  navigate("/projects");
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                className="custom-nav-link"
                role="button"
                onClick={() => {
                  setPage(3);
                  navigate("/resume");
                }}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                className="custom-nav-link"
                role="button"
                onClick={() => {
                  setPage(4);
                  navigate("/contact");
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Nav.Link
            className="custom-dark-mode ms-auto order-md-2 order-2"
            role="button"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <FaSun className="custom-nav-link-icon" size={20} />
            ) : (
              <FaMoon className="custom-nav-link-icon p-0 m-0" size={20} />
            )}
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
