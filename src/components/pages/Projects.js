import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { DarkModeContext } from "../context/DarkModeContext";

import "./cssFiles/About.css";

const Projects = () => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <Container fluid className="common-container">
      <Row className="mt-2 mt-md-3 mt-lg-4">
        <Col xs={12}>
          <div
            className={"h2 text-center" + (darkMode ? " color-primary" : "")}
          >
            My Projects
          </div>
        </Col>
        <Col xs={12} className="mt-4 mb-4 fs-5 text-start">
          <ul>
            <li>
              <a className="custom-a" href="#web">
                Web Projects
              </a>
            </li>
            <li>
              <a className="custom-a" href="#academic">
                Academic Projects
              </a>
            </li>
          </ul>
        </Col>

        <Col xs={12} id="web" className="mb-4">
          <div className="h4 fw-semibold mb-4 text-center">Web Projects</div>
          <Stack gap={2}>
            <Row className="border border-info border-0 p-2 ms-2 me-2 g-2 hstack">
              <Col
                md={5}
                className="d-flex align-items-center p-0 mb-2 mb-md-0 mt-0 custom-embed"
              >
                <iframe
                  className="p-0 m-0"
                  style={{ width: "100%", height: "250px" }}
                  src="https://www.youtube.com/embed/MobiPt_rQKo"
                  title="DX BALL Game using C programming and iGraphics.h Library"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen;"
                ></iframe>
                
              </Col>
              <Col md={1} className="" style={{height: "100%"}}>
                <div className="vr" style={{height: "100%"}}></div>
              </Col>

              <Col md={6} className="paragraph-decoration p-0 ps-md-2">
                <div className="fs-5 text-center fw-bold mb-2">
                  DX BALL Game
                </div>
                <div>
                  <span className="fw-bold">Role: </span>
                  Everything
                </div>
                <div>
                  <span className="fw-bold">Technology: </span>
                  C, iGraphics.h
                </div>
                <div>
                  <span className="fw-bold">Description: </span>
                  DX Ball is a single player game. The player has to break all
                  the bricks to win the game. The player has to control the
                  paddle to bounce the ball and break the bricks. The player has
                  to collect the power-ups to increase the score. The player has
                </div>
                <div>
                  <span className="fw-bold">Features: </span>
                  <ul>
                    <li>Single player game</li>
                    <li>Power-ups</li>
                    <li>High score</li>
                  </ul>
                </div>
                <div>
                  <span className="fw-bold"> </span>
                  <a
                    className="custom-a"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Link:
                  </a>
                </div>
              </Col>
            </Row>
          </Stack>
        </Col>

        <Col xs={12} id="academic">
          <div className="h4 fw-semibold mb-4 text-center">Web Projects</div>
          <Stack gap={2}>
            <Row className="border border-info border-2 pt-2 pb-2 ms-2 me-2">
              <iframe
                width="100%"
                height="250px"
                src="https://www.youtube.com/embed/MobiPt_rQKo"
                title="DX BALL Game using C programming and iGraphics.h Library"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
              ></iframe>
            </Row>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
