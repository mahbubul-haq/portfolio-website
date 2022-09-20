import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { BiTime } from "react-icons/bi";
import { lastUpdated, skillsData } from "../../data";
import "./cssFiles/About.css";

const Skills = () => {
  const [progress, setProgress] = React.useState(true);
  return (
    <Container fluid className="common-container">
      <Row className="common-toogle-progress">
        <Col className="common-toogle-progress-col col-12 text-start">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="progress-toggle-switch"
              checked={progress}
              onChange={() => setProgress(!progress)}
            />
            <label
              className="form-check-label"
              htmlFor="progress-toggle-switch"
            >
              {progress ? "Hide Progress" : "Show Progress"}
            </label>
          </div>
        </Col>
      </Row>

      <Row className="mt-1 d-flex justify-content-center align-items-center">
        <Col>
          <Stack gap={2} className="paragraph-decoration">
            <div className="h2 text-center">My Skills</div>
            <div className="container-fluid p-0">
              {skillsData.map((skill, index) => {
                return (
                  <div className="row gx-1 gy-0 mb-4" key={index}>
                    <div className="col-12 h4 fw-semibold">
                      {skill.skillType}
                    </div>
                    {skill.list.map((current, index1) => {
                      return (
                        <>
                          {progress ? (
                            <>
                              <div
                                className="col-12 col-sm-6 text-sm-end"
                                key={index1}
                              >
                                <div className="d-flex align-items-center justify-content-end m-0 me-sm-3 p-0">
                                  {current.name}
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 d-flex align-items-center m-0">
                                <div
                                  className="progress m-0 p-0 w-100"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar bg-info "
                                    role="progressbar"
                                    aria-valuemin={0}
                                    aria-valuenow={current.progress}
                                    aria-valuemax={100}
                                    style={{
                                      width: `${current.progress}%`,
                                      color: "black",
                                      textAlign: "right",
                                      paddingLeft: "5px",
                                    }}
                                  >
                                    {current.progress}%
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div key={index1} className="col-auto me-2">
                              {current.name}
                              {index1 !== skill.list.length - 1 ? "," : ""}
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="text-start fs-6 opacity-75 mb-4">
              <BiTime className="mb-1"/> Last Updated: {lastUpdated}
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
