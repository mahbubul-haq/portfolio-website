import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "../nav/Nav.css";
import "./cssFiles/About.css";

const Home = () => {
  
  return (
    
    <Container
      fluid
      className="basic-page-style d-flex align-items-center justify-content-center"
      style={{padding:"72px 5px 20px 5px", overflowX: "auto" }}
    >
      <Row className="m-auto">
        <Col className="d-flex justify-content-center align-items-center">
          <Stack className="text-center" gap={1}>
            <div className="mb-3">
              <Image
                fluid
                rounded
                roundedCircle
                thumbnail
                className="profile-picture"
                src="images/hi.png"
                alt="Profile Picture"
              />
            </div>
            <div className="h3 about-name mb-2">Mahbubul Haque</div>
            <div className="about-institute">
              Computer Science and Engineering Student | BUET
            </div>
            <div className="about-work">
              Full Stack Web Developer | Competitive Programmer
            </div>
            <div className="mt-5 ms-auto me-auto">
              <Stack direction="horizontal" gap={2}>
                <a
                  href="https://www.linkedin.com/in/mahbubul-haque-807311189/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://www.github.com/mahbubul-haq"
                  target="_blank"
                  rel="noreferrer"
                  title="Github"
                >
                  <FaGithubSquare size={30} />
                </a>
                <a
                  href="https://codeforces.com/profile/F__"
                  target="_blank"
                  rel="noreferrer"
                  title="Codeforces"
                >
                  <div className={localStorage.getItem("darkMode") === "true"? 
                  "codeforces-icon-wrapper codeforces-icon-wrapper-dark d-inline-block" : "codeforces-icon-wrapper d-inline-block"}>
                    <iconify-icon
                      icon="simple-icons:codeforces"
                      className="codeforces-icon"
                    ></iconify-icon>
                  </div>
                </a>
                <a
                  href="https://web.facebook.com/mahbubulhaque99"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                >
                  <FaFacebookSquare size={30} />
                </a>
              </Stack>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
