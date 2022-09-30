import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces, SiGithub } from "react-icons/si";
import { DarkModeContext } from "../context/DarkModeContext";
import "../nav/Nav.css";
import "./cssFiles/About.css";

const Home = () => {
  const { setPage } = React.useContext(DarkModeContext);
  const [isEnglish, setIsEnglish] = React.useState(true);
  const {darkMode} = React.useContext(DarkModeContext);

  useEffect(() => {
    setPage(0);
  }, []);

  return (
    <Container fluid className="common-container vertically-centered">
      <Row className="m-auto">
        <Col className="">
          <Stack className="text-center" gap={1}>
            <div className="mb-4">
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

            {isEnglish ? (
              <>
                <div className={"h3 about-name mb-2" + (darkMode? " color-primary": "")}>Mahbubul Haque</div>
                <div className="about-institute">
                  Computer Science and Engineering Student &#183; BUET
                </div>
                <div className="about-work">
                  Full Stack Web Developer &#183; Competitive Programmer
                </div>
              </>
            ) : (
              <>
                <div className={"h3 about-name mb-2 " + (darkMode? " color-primary": "")} >মাহবুবুল হক</div>
                <div className="about-institute">
                  কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং &#183; বুয়েট
                </div>
                <div className="about-work">
                  ফুল স্ট্যাক ওয়েব ডেভেলপার &#183; কম্পিটিটিভ প্রোগ্রামার
                </div>
              </>
            )}

            <div className="mt-5 ms-auto me-auto">
              <Stack direction="horizontal" gap={2}>
                <div className="home-linkedin">
                  <a
                    href="https://www.linkedin.com/in/mahbubul-haque-807311189/"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                    className="home-link"
                  >
                    <FaLinkedinIn size={30} />
                  </a>
                </div>
                <div className="home-github">
                  <a
                    href="https://www.github.com/mahbubul-haq"
                    target="_blank"
                    rel="noreferrer"
                    title="Github"
                    className="home-link"
                  >
                    <SiGithub size={30} />
                  </a>
                </div>
                <div className="home-codeforces">
                  <a
                    href="https://codeforces.com/profile/F__"
                    target="_blank"
                    rel="noreferrer"
                    title="Codeforces"
                    className="home-link"
                  >
                    <SiCodeforces size={30} />
                  </a>
                </div>
                <div className="home-facebook">
                  <a
                    href="https://web.facebook.com/mahbubulhaque99"
                    target="_blank"
                    rel="noreferrer"
                    title="Facebook"
                    className="home-link"
                  >
                    <FaFacebookF size={30} />
                  </a>
                </div>
              </Stack>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
