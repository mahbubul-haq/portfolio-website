/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "./Nav.css";



const MyNav = () => {
  // const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);
  // const [resized, setResized] = useState(false);
    const [page, setPage] = useState(0);
  // const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

  // useEffect(() => {
  //   var elements = document.getElementsByClassName("nav-items");
  //   for (var i = 0; i < elements.length; i++) {
  //     if (i == page) {
  //       elements[i].classList.add("active");
  //     } else {
  //       elements[i].classList.remove("active");
  //     }
  //   }
  // }, [page]);

  // useEffect(() => {
  //   const navBar = document.querySelector("#nav-container-outer");
  //   console.log("called", window.innerWidth, isNavBarExpanded);
  //   if (isNavBarExpanded) {
  //     navBar.style.display = "block";
  //   } else if (window.innerWidth <= 768) {
  //     navBar.style.display = "none";
  //   }
  // }, [isNavBarExpanded, resized]);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.getElementById("container").classList.add("dark-mode");
  //     document.getElementById("nav-container").classList.add("dark-mode");
  //   } else {
  //     document.getElementById("container").classList.remove("dark-mode");
  //     document.getElementById("nav-container").classList.remove("dark-mode");
  //   }
  // }, [darkMode]);

  // useEffect(() => {
  //   /// add event listener to window resize
  //   const eventListener = window.addEventListener("resize", () => {
  //     if (window.innerWidth > 768) {
  //       document.querySelector("#nav-container-outer").style.display = "block";
  //       setIsNavBarExpanded(false);
  //       setResized(!resized);
  //     } else if (window.innerWidth <= 768) {
  //       setResized(!resized);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("resize", eventListener);
  //   };
  // }, []);


  // const getDarkMode = () => {
  //   return (
  //     <div id="dark-mode" className="dark-nav">
  //         {darkMode ? <BsSun id="dark-mode-icon" onClick={
  //           () => {
  //             setDarkMode(!darkMode);
  //           }
  //         } /> : <BsMoon id="light-mode-icon" 
  //         onClick={
  //           () => {
  //             setDarkMode(!darkMode);
  //           }
  //         } />}
  //       </div>
  //   )
  // }


  return (
    <>
      <Navbar expand="md" className="custom-navbar" variant="dark">
        <Container fluid className="custom-navbar" >
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
          <Navbar.Toggle className="custom-navbar-toggle" aria-controls="basic-navbar-nav" >
            {/* <BsList className="custom-navbar-toggle-icon" size={33}/> */}
          </Navbar.Toggle>
          <Navbar.Collapse className="custom-navbar-collapse" id="basic-navbar-nav">
            <Nav className="m-auto custom-nav">
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
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
