import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces, SiGithub } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { homeCards } from "../../data";
import { DarkModeContext } from "../context/DarkModeContext";
import "../nav/Nav.css";
import "./cssFiles/About.css";
import "./cssFiles/ExtraDesign.css";
import Typewriter from "typewriter-effect/dist/core";

const Home = () => {
  const { setPage } = React.useContext(DarkModeContext);
  const [isEnglish, setIsEnglish] = React.useState(true);
  const { darkMode } = React.useContext(DarkModeContext);
  const navigate = useNavigate();

  useEffect(() => {
    setPage(0);
  }, []);

  useEffect(() => {
    // const typewriter = new Typewriter(".love-programming", {
    //   strings: ["is in love with programming"],
    //   loop: true,
    //   delay: 50,
    //   deleteSpeed: 20,
    //   pauseFor: 4000,
    //   autoStart: true,
    // });

    const typewriter1 = new Typewriter(".work-with", {
      strings: ["Node.js", "Express.js", "React.js", "Bootstrap", "JavaScript", "CSS", "MongoDB", "PostgreSQL", "Oracle", "C++", "Python", "Algorithms", "Problem Solving"],
      loop: true,
      delay: 50,
      deleteSpeed: 20,
      pauseFor: 2500,
      autoStart: true,
    });

    return () => {
      // typewriter.stop();
      typewriter1.stop();
    };
  }, []);


  return (
    <Container fluid className="common-container">
      {/* <svg width="100%" height="100%" style={{position: "absolute", zIndex: "1", left: "0", top: "0"}}>
        <g id="R1" transform="translate(250 250)">
          <ellipse rx="100" ry="0" opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="7s"
              from="0"
              to="360"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              dur="8s"
              values="-20; 220; -20"
              repeatCount="indefinite"
            />
            <animate
              attributeName="ry"
              dur="3s"
              values="10; 60; 10"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
        <use href="#R1" transform="rotate(72 390 150)" />
        <use href="#R1" transform="rotate(144 390 150)" />
        <use href="#R1" transform="rotate(216 390 150)" />
        <use href="#R1" transform="rotate(288 390 150)" />
      </svg> */}
      <Row className="mt-2 mt-md-3 mt-lg-4">
        <Col className="">
          <Stack className="text-center" gap={1}>
            <div className="mb-4">
              <div className="home-img-wrapper">
                <Image
                  fluid
                  className="profile-picture"
                  src="images/hi.png"
                  alt="Profile Picture"
                />
              </div>
            </div>

            {isEnglish ? (
              <>
                <div
                  className={
                    "h3 about-name mb-0" + (darkMode ? " color-primary" : "")
                  }
                  style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif", textTransform: "uppercase" }}
                >
                  Mahbubul <span className="haque">Haque</span>
                </div>

                <div className="love-programming m-0 p-0">
                 In love with programming
                </div>

                {/* <div className="about-institute">
                  Computer Science and Engineering Student &#183; BUET
                </div> */}
                <div className="about-work mt-3">
                  Full Stack Web Developer &#183; Competitive Programmer
                </div>
                <div style={{fontSize: "125%", fontWeight: 500,}}>
                  I work with <span className="work-with" style={{color: "var(--navbar-active-hover1)"}}></span>
                </div>
              </>
            ) : (
              <>
                <div
                  className={
                    "h3 about-name mb-2 " + (darkMode ? " color-primary" : "")
                  }
                >
                  মাহবুবুল হক
                </div>
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
                    className={"home-link" + (darkMode ? " color-primary" : "")}
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
                    className={"home-link" + (darkMode ? " color-primary" : "")}
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
                    className={"home-link" + (darkMode ? " color-primary" : "")}
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
                    className={"home-link" + (darkMode ? " color-primary" : "")}
                  >
                    <FaFacebookF size={30} />
                  </a>
                </div>
              </Stack>
            </div>
          </Stack>
        </Col>
      </Row>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
        {homeCards.map((card, index) => {
          return (
            <div className="col" key={index}>
              <div
                className={
                  "card h-100 home-card " +
                  card.cardClass +
                  (darkMode ? " color-primary" : "")
                }
              >
                <div
                  className={
                    "full-stack-top " +
                    card.cardTopClass +
                    (darkMode ? " opacity-70" : "")
                  }
                ></div>
                <div className="home-card-image mb-0 d-flex justify-content-center">
                  <div
                    style={{
                      backgroundColor: "black",
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      margin: "0",
                      padding: "0",
                    }}
                  >
                    <img
                      src={card.imgSrc}
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                      }}
                      className={
                        "img-thumbnail img-fluid m-0 " +
                        (darkMode ? "opacity-75" : "")
                      }
                      alt="..."
                    />
                  </div>
                </div>
                <div className="card-body home-card-body">
                  <h4 className="home-card-title mt-0">{card.title}</h4>
                  <p
                    className={
                      "home-card-text mb-4" +
                      (darkMode ? " color-secondary" : "")
                    }
                  >
                    {card.description}
                  </p>
                </div>
                <div
                  className={
                    "card-footer" + (darkMode ? " home-card-footer" : "")
                  }
                >
                  {card.navigateTo ? (
                    <button
                      className={
                        "btn btn-primary btn-sm " + card.cardButtonClass
                      }
                      onClick={() => {
                        navigate(
                          "/" + card.navigateTo,
                          card.state ? { state: card.state } : {}
                        );
                      }}
                    >
                      {card.buttonText}
                    </button>
                  ) : (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noreferrer"
                      role="button"
                      className={
                        "btn btn-primary btn-sm " + card.cardButtonClass
                      }
                    >
                      {card.buttonText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Home;
