import React, { useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { BiTime } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { lastUpdated, problemSolvingData } from "../../data";
import { DarkModeContext } from "../context/DarkModeContext";
import "./cssFiles/About.css";

const Experience = () => {
  const [isSolve, setIsSolve] = React.useState(false);
  const {setPage} = React.useContext(DarkModeContext);
  const {darkMode} = React.useContext(DarkModeContext);

  const value = useLocation().state;
  useEffect(() => {
    console.log(value);
    if (value !== null) {
        const {solve} = value;
        setIsSolve(solve);
    }
  }, [value]);

  const navigate = useNavigate();
  
  useEffect(() => {
    setPage(4);
  }, []);

  useEffect(() => {
    let element1 = document.getElementById("problem-solving");
    let element2 = document.getElementById("problem-solving-table");
    console.log("cal");
    if (element1 && element2) {
      console.log("ok");
      if (isSolve) {
        console.log(element2.offsetHeight);
        element1.style.height = element2.offsetHeight + "px";
      } else {
        element1.style.height = "0px";
      }
    }
  }, [isSolve]);

  return (
    <Container fluid className="common-container">
      <Row className="mt-2 mt-md-3 mt-lg-4">
        <Col xs={12}>
          <div
            className={"h2 text-center" + (darkMode ? " color-primary" : "")}
            style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
          >
            My Experience
          </div>
        </Col>
        <Col xs={12} className="mt-4 text-start paragraph-decoration">
          <div
            className={"h4 fw-semibold" + (darkMode ? " color-primary" : "")}
          >
            Problem Solving
          </div>
          <div className="mt-3 mb-1" style={{ textAlign: "justify" }}>
            I am an avid learner of Algorithms and Data Structures, Mathematics
            and Problem solving strategies. I have solved 1500+ problems on
            various platforms.{" "}
            <span
              className="button-link"
              onClick={() => {
                setIsSolve(!isSolve);
                console.log("changed", isSolve);
              }}
            >
              {isSolve ? "Hide" : "View"}
            </span>{" "}
            my problem solving stats. Also, see my{" "}
            <a
              className="button-link"
              href="https://github.com/mahbubul-haq/ImplementedAlgorithms"
              target={"_blank"}
              rel="noreferrer"
            >
              Algorithm Learning
            </a>{" "}
            in GitHub.
          </div>
          <div
            style={{
              overflow: "auto",
              overflowY: "hidden",
              transition: "height 400ms ease-in-out",
            }}
            id="problem-solving"
          >
            <Table
              className="text-center"
              striped
              bordered
              variant={darkMode ? "dark" : "light"}
              size="sm"
              id="problem-solving-table"
            >
              <thead>
                <tr>
                  <th>OJ</th>
                  <th>Username</th>
                  <th>Solve count</th>
                </tr>
              </thead>
              <tbody>
                {problemSolvingData
                  .sort((a, b) => b.solveCount - a.solveCount)
                  .map((current, index) => {
                    return (
                      <tr key={index}>
                        <td>{current.oj}</td>
                        <td className="text-center">
                          <a
                            className="custom-a"
                            href={current.profileLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {current.username}
                          </a>
                        </td>
                        <td>{current.solveCount}</td>
                      </tr>
                    );
                  })}
                <tr>
                  <td colSpan={2}>Total Solved</td>
                  <td>
                    {problemSolvingData.reduce(
                      (acc, current) => acc + current.solveCount,
                      0
                    )}
                  </td>
                </tr>
              </tbody>
              <caption className="text-end">
                <div
                  className="fs-6 opacity-100 mb-0"
                  style={{ color: "#6c757d" }}
                  id="last-updated"
                  variant="light"
                >
                  <BiTime className="mb-1" /> Last Updated: {lastUpdated}
                </div>
              </caption>
            </Table>
          </div>
        </Col>

        <Col xs={12} className="mt-3 text-start paragraph-decoration">
          <div
            className={"h4 fw-semibold" + (darkMode ? " color-primary" : "")}
          >
            Project Works
          </div>
          <div className="mt-3 mb-1" style={{ textAlign: "justify" }}>
            I have worked on some interesting projects. I have experience of
            working on both individual and team projects. Check out my{" "}
            <span
              className="button-link"
              onClick={() => {
                setPage(3);
                navigate("/projects");
                console.log("changed", isSolve);
              }}
            >
              projects
            </span>
            .
          </div>
        </Col>

        <Col xs={12} className="paragraph-decoration">
          <div
            className={
              "h4 fw-semibold mt-3 text-start" +
              (darkMode ? " color-primary" : "")
            }
          >
            Teaching
          </div>
          <div className="mt-3 mb-1" style={{ textAlign: "justify" }}>
            {/* /* teaching computer science students of University in Bangladesh and abroad
            topics like Data Structures, Algorithms, C, C++, Java, Python, Problem solving,
            Discrete math etc.  */}
            I have experience in teaching Computer Science students of
            Universities in Bangladesh and abroad. I have tutored the following
            topics both offline and online:{" "}
            <Badge className="me-2 mb-1" pill bg="primary" text="light">
              C Programming
            </Badge>
            <Badge className="me-2 mb-1" pill bg="primary" text="light">
              C++
            </Badge>
            <Badge className="me-2 mb-1" pill bg="primary" text="light">
              Python
            </Badge>
            <Badge className="me-2 mb-1" pill bg="primary" text="light">
              Java
            </Badge>
            <Badge className="me-2 mb-1" pill bg="primary" text="light">
              Data Structures
            </Badge>
            <Badge className="me-2 mb-1" pill bg="primary" text="light">
              Algorithms
            </Badge>
            <Badge className="me-2 mb-1" pill bg="primary" text="light">
              Problem-Solving
            </Badge>
            <Badge className="me-2 mb-1" pill bg="primary" text="light">
              Discrete Math
            </Badge>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
