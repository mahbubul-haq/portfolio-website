import React from 'react';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import "./cssFiles/About.css";

const About = () => {
  return (
    <Container fluid className="basic-page-style">
      <Row className="mt-1 mt-sm-2">
        <Col
          className="d-flex justify-content-center align-items-center"
        >
          <Stack className="text-center" gap={1}>
            <div className='mb-2'>
              <Image
                fluid
                rounded
                roundedCircle
                className='profile-picture'
                src="images/hi.png"
                alt="Profile Picture"
              />
            </div>
            <div className='h3 about-name mb-1'>Mahbubul Haque</div>
            <div className='about-institute'>Computer Science and Engineering Student | BUET</div>
            <div className='about-work'>Full Stack Web Developer | Competitive Programmer</div>
            <div></div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default About
