import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { projectsInfo } from "../../data";
import { DarkModeContext } from "../context/DarkModeContext";

import "./cssFiles/About.css";

const Projects = () => {
  const { darkMode,  setPage } = React.useContext(DarkModeContext);

  useEffect(() => {
    setPage(3);
  });


  return (
    <Container fluid className="common-container">
      <Row className="mt-2 mt-md-3 mt-lg-4">
        <Col xs={12}>
          <div
            className={"h2 text-center" + (darkMode ? " color-primary" : "")}
            style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
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
        {projectsInfo.map((project, index) => {
          return (
            <Col xs={12} id={project.id} className="mb-4" key={index}>
              <div
                className={
                  "h4 fw-semibold text-center mb-5" +
                  (darkMode ? " color-primary" : "")
                }
              >
                {project.projectType}
              </div>
              <Stack gap={2}>
                {project.projects.map((curProject, index1) => {
                  return (
                    <Row
                      key={index1}
                      className="border border-info border-0 p-0 ms-2 mb-4 me-2 hstack g-0 g-md-5"
                    >
                      <Col
                        md={6}
                        className="d-flex align-items-center custom-embed p-0"
                      >
                        {curProject.demonstration.showVideo ? (
                          <iframe
                            className="p-0 m-0"
                            style={{
                              width: "100%",
                              height: "auto",
                              minHeight: "250px",
                            }}
                            src={curProject.demonstration.embedLink}
                            title="DX BALL Game using C programming and iGraphics.h Library"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen;"
                          ></iframe>
                        ) : (
                          <img
                            src={
                              darkMode
                                ? curProject.demonstration.imgLinkDark
                                : curProject.demonstration.imgLink
                            }
                            alt=""
                            style={{
                              width: "100%",
                              height: "auto",
                              minHeight: "250px",
                              maxHeight: "250px",
                            }}
                            className="img-fluid"
                          />
                        )}
                      </Col>

                      <Col md={6} className="paragraph-decoration">
                        <div
                          className={
                            "fw-semibold m-0 p-0 mb-4 mt-3" +
                            (darkMode ? " color-primary" : "")
                          }
                        >
                          {curProject.title}
                          {curProject.titleLink ? (
                            <>
                              {" - "}
                              <a
                                className="button-link"
                                href={curProject.titleLink.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {curProject.titleLink.text}
                                {/* <span className="link-icon ms-2">
                                  <FaLink className="mb-1 p-0" size={16} />
                                </span> */}
                              </a>
                            </>
                          ) : null}
                          {curProject.githubLink ? (
                            <>
                              {" - "}
                              <a
                                className="button-link"
                                href={curProject.githubLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Github Link
                                {/* <span className="link-icon ms-2">
                                  <FaLink className="mb-1 p-0" size={16} />
                                </span> */}
                              </a>
                            </>
                          ) : null}
                        </div>
                        <div>
                          <span
                            className={
                              "fw-semibold" + (darkMode ? " color-primary" : "")
                            }
                          >
                            Role:{" "}
                          </span>
                          {curProject.role}
                        </div>
                        <div>
                          <span
                            className={
                              "fw-semibold" + (darkMode ? " color-primary" : "")
                            }
                          >
                            Technology:{" "}
                          </span>
                          {curProject.technology}
                        </div>
                        <div>
                          <span
                            className={
                              "fw-semibold" + (darkMode ? " color-primary" : "")
                            }
                          >
                            Description:{" "}
                          </span>
                          {curProject.description}
                        </div>
                        <div>
                          <span
                            className={
                              "fw-semibold" + (darkMode ? " color-primary" : "")
                            }
                          >
                            Features{" "}
                          </span>
                          <ul>
                            {curProject.features.map((feature, index2) => {
                              return <li key={index2}>{feature}</li>;
                            })}
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </Stack>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
