/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


import "./Nav.css";




const MyNav = () => {
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

        element = document.getElementsByClassName("codeforces-icon-wrapper");
        if (element && element.length > 0) {
          element[0].classList.add("codeforces-icon-wrapper-dark");
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

            element = document.getElementsByClassName("codeforces-icon-wrapper");
            if (element && element.length > 0) {
              element[0].classList.remove("codeforces-icon-wrapper-dark");
            }

      }
    }, [darkMode]);

    useEffect(() => {
      let element = document.getElementsByClassName("custom-nav-link");
      for (let i = 0; i < element.length; i++) {
        if (i + 1 === page) {
          element[i].classList.add("current-page");
        }
        else {
          element[i].classList.remove("current-page");
        }
      }
    }, [page]);

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
            {/* <img src="images/logo_transparent.png" className="img-fluid" style={{width:"45px", height:"45px", margin:"-4px 0px -4px 0", padding: "0"}} alt="logo" /> */}
            <span className="navbar-brand-name">Mahbubul Haque</span>
            {/* <span className="nav-logo badge pill">M</span>
            <Badge variant="info" className="nav-logo">M</Badge> */}
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
