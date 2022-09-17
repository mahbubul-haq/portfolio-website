/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "react-bootstrap/Stack";
import { BsXLg } from 'react-icons/bs';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";


import "./Nav.css";




const MyNav = () => {
    const [showColor, setShowColor] = useState(false);
    const {darkMode, setDarkMode, page, setPage} = React.useContext(DarkModeContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true);
      setTimeout(() => { setShowColor(!showColor); }, 100);
      setTimeout( ()=> setShowColor(!showColor), 300)  ;
    }

    

    const getOffCanvas = () => {
        let color="black", backgroundColor = "white", class_name="";
        if (darkMode) {
          color = "rgba(255, 255, 255, 0.85)";
          backgroundColor = "#222430";
          class_name = "nav-offcanvas-dark-header"
        }

        return (
          <>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement={"end"}
              className="nav-offcanvas"
              style={{ color: color, backgroundColor: backgroundColor }}
            >
              <Offcanvas.Header
                className="nav-offcanvas-header"
                style={{ color: color }}
              >
                <Offcanvas.Title>Mahbubul Haque</Offcanvas.Title>
                <BsXLg
                  onClick={() => {
                    handleClose();
                    
                  }}
                />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="text-center m-md-auto custom-nav ">
                  <Stack>
                    <Nav.Link
                      className={"custom-nav-link1 " + class_name}
                      role="button"
                      onClick={() => {
                        setPage(0);
                        setShowColor(!showColor);
                        navigate("/");
                        handleClose();
                      }}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      className={"custom-nav-link1 " + class_name}
                      role="button"
                      onClick={() => {
                        setPage(1);
                        setShowColor(!showColor);
                        navigate("/about");
                        handleClose();
                      }}
                    >
                      About
                    </Nav.Link>
                    <Nav.Link
                      className={"custom-nav-link1 " + class_name}
                      role="button"
                      onClick={() => {
                        setPage(2);
                        setShowColor(!showColor);
                        navigate("/skills");
                        handleClose();
                      }}
                    >
                      Skills
                    </Nav.Link>
                    <Nav.Link
                      className={"custom-nav-link1 " + class_name}
                      role="button"
                      onClick={() => {
                        setPage(3);
                        setShowColor(!showColor);
                        navigate("/projects");
                        handleClose();
                      }}
                    >
                      Projects
                    </Nav.Link>
                    <Nav.Link
                      className={"custom-nav-link1 " + class_name}
                      role="button"
                      onClick={() => {
                        setPage(4);
                        setShowColor(!showColor);
                        navigate("/experience");
                        handleClose();
                      }}
                    >
                      Experience
                    </Nav.Link>
                    <Nav.Link
                      className={"custom-nav-link1 " + class_name}
                      role="button"
                      onClick={() => {
                        setPage(5);
                        setShowColor(!showColor);
                        navigate("/resume");
                        handleClose();
                      }}
                    >
                      Resume
                    </Nav.Link>
                    <Nav.Link
                      className={"custom-nav-link1 " + class_name}
                      role="button"
                      onClick={() => {
                        setPage(6);
                        setShowColor(!showColor);
                        navigate("/contact");
                        handleClose();
                      }}
                    >
                      Contact
                    </Nav.Link>
                  </Stack>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
      
    }

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
            console.log(element);
            if (element && element.length > 0) {
              element[0].classList.remove("codeforces-icon-wrapper-dark1");
              element[0].classList.remove("codeforces-icon-wrapper-dark");
            }

      }
    }, [darkMode]);

    useEffect(() => {
     
      let element = document.getElementsByClassName("custom-nav-link");
      console.log(element);
      for (let i = 0; i < element.length; i++) {
        if (i === page) {
          element[i].classList.add("current-page");
        }
        else {
          element[i].classList.remove("current-page");
        }
      }
    }, [page]);

    useEffect(() => {
      let element = document.getElementsByClassName("custom-nav-link1");
      console.log(element);
      for (let i = 0; i < element.length; i++) {
        if (i === page) {
          element[i].classList.add("current-page");
        }
        else {
          element[i].classList.remove("current-page");
        }
      }
    }, [showColor]);

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
            <span  className="navbar-brand-name d-none d-sm-block d-md-none d-lg-block">
              Mahbubul Haque
            </span>
            {/* <span className="nav-logo badge pill">M</span>
            <Badge variant="info" className="nav-logo">M</Badge> */}
          </Navbar.Brand>
          <Navbar.Toggle
            className="custom-navbar-toggle order-3"
            aria-controls="basic-navbar-nav"
          >
            <FaBars
              className="custom-navbar-toggle-icon"
              size={25}
              onClick={() => {
                handleShow();
              }}
            />
          </Navbar.Toggle>

          <Navbar.Collapse
            className="custom-navbar-collapse ms-auto order-md-1 order-5 d-md-none"
            id="basic-navbar-nav"
          >
            <Nav className="text-center m-md-auto custom-nav ">
              <Nav.Link
                className="custom-nav-link"
                role="button"
                onClick={() => {
                  setPage(0);
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
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
                  navigate("/skills");
                }}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                className="custom-nav-link"
                role="button"
                onClick={() => {
                  setPage(3);
                  navigate("/projects");
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                className="custom-nav-link"
                role="button"
                onClick={() => {
                  setPage(4);
                  navigate("/experience");
                }}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                className="custom-nav-link"
                role="button"
                onClick={() => {
                  setPage(5);
                  navigate("/resume");
                }}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                className="custom-nav-link"
                role="button"
                onClick={() => {
                  setPage(6);
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
      {getOffCanvas()}
    </>
  );
};

export default MyNav;
