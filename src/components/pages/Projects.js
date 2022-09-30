import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { DarkModeContext } from "../context/DarkModeContext";

const Projects = () => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <Container fluid className="common-container">
      <Row className="mt-2 mt-md-3 mt-lg-4">
        <Col>
          <Stack gap={2}>
            <div className="h2 text-center mb-3">My Projects</div>
            <div>
              <iframe
                width="100%"
                height="250px"
                src="https://www.youtube.com/embed/MobiPt_rQKo"
                title="DX BALL Game using C programming and iGraphics.h Library"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
              ></iframe>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
