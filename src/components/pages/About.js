import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { DarkModeContext } from "../context/DarkModeContext";
import "./cssFiles/About.css";

const About = () => {

  const context = React.useContext(DarkModeContext);
  const {setPage } = context;

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <div className="outer-container">
    <Container fluid className="common-container">
      <Row className="mt-2 mt-md-3 mt-lg-4 d-flex justify-content-center align-items-center">
        <Col>
          <Stack gap={2} className="paragraph-decoration">
            <div className="h2 text-center">About Me</div>
            <div className="lh-base fs-6">
              Hi,
              <br></br>I am Mahbubul Haque, an undergraduate Computer Science
              and Engineering student at{" "}
              <a className="custom-a" href="https://www.buet.ac.bd/">
                Bangladesh University of Engineering and Technology (BUET){" "}
              </a>
              . I am an enthusiastic Programmer. I love to solve problems and
              learn new things.
            </div>
            <div>
              My interests are in <strong>Web Development</strong>,{" "}
              <strong>Algorithm Design and Analysis</strong>, and Competitive
              Programming. I am also interested in Machine Learning and
              Artificial Intelligence. I like to learn new technology.
            </div>
            <div>
              {" "}
              I was very active with Competitive Programming for more than{" "}
              <strong>three years</strong>, which prepared me as a good problem
              solver and efficient programmer. I have been learning different
              Web Development technologies for the last{" "}
              <strong>two years</strong> and gathered quite a lot of experience
              in this field.
            </div>
            <div>
              {/*want to  pursue carear in web development, full time or part time remote job*/}
              I am looking for a full-time or part-time <strong>remote job</strong>{" "} in Web Development. I am also open to internship
              opportunities.
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default About;
