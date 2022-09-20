import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { BiTime } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { lastUpdated, problemSolvingData } from "../../data";
import "./cssFiles/About.css";

const Experience = () => {
  const [isSolve, setIsSolve] = React.useState(false);

  const navigate = useNavigate();

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
      <Row className="mt-1">
        <Col xs={12}>
          <div className="h2 text-center">My Experience</div>
        </Col>
        <Col xs={12} className="mt-4 text-start paragraph-decoration">
          <div className="h4 fw-semibold">Problem Solving</div>
          <div className="mt-3 mb-1" style={{ textAlign: "justify" }}>
            I was an avid learner of Algorithms and Data Structures, Mathematics
            and Problem solving strategies. I have solved more than 1500+
            problems on various platforms.{" "}
            <span
              className="button-link"
              onClick={() => {
                setIsSolve(!isSolve);
                console.log("changed", isSolve);
              }}
            >
              {isSolve ? "Hide" : "View"}
            </span>{" "}
            my problem solving stats.
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
              variant="dark"
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
                  <BiTime className="mb-0" /> Last Updated: {lastUpdated}
                </div>
              </caption>
            </Table>
          </div>
        </Col>

        <Col xs={12} className="mt-3 text-start paragraph-decoration">
          <div className="h4 fw-semibold">Project Works</div>
          <div className="mt-3 mb-1" style={{ textAlign: "justify" }}>
            I have worked on some interesting projects. I have worked on both individual and 
            group projects.
            I have quite a good experience of working with a team. See my proejcts <span
              className="button-link"
              onClick={() => {
                localStorage.setItem("page", 3);
                navigate("/projects");
                console.log("changed", isSolve);
              }}
            >here</span>
          </div>
        </Col>


        <Col xs={12} className="paragraph-decoration">
          <div className="h4 fw-semibold mt-3 text-start">Teaching</div>
          <div className="mt-3 mb-1" style={{ textAlign: "justify" }}>
            {/* /* teaching computer science students of University in Bangladesh and abroad
            topics like Data Structures, Algorithms, C, C++, Java, Python, Problem solving,
            Discrete math etc.  */}
            I have experience in teaching computer science students of
            Universities in Bangladesh and abroad. I have tutored the following
            topics both offline and online.
            <div className="d-flex align-items-center justify-content-center ">
              <ul className="m-auto">
                <li className="text-center">Data Structures</li>
                <li>C Programming</li>
                <li>C++</li>
                <li>Python</li>
                <li>Java</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Problem-Solving</li>
                <li>Discrete Math</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
