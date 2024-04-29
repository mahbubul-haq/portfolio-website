import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

import {
    resumeEducation,
    resumeExperience,
    resumeProjects,
    resumeSkills,
} from "../../data";
import { DarkModeContext } from "../context/DarkModeContext";

const Resume = () => {
    const { setPage, darkMode } = React.useContext(DarkModeContext);

    useEffect(() => {
        setPage(5);
    });

    const downloadResume = () => {
        fetch("files/Resume - Mahbubul Haque.pdf").then((response) => {
            response.blob().then((blob) => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement("a");
                a.href = url;
                a.download = "Resume - Mahbubul Haque.pdf";
                a.click();
            });
        });
    };

    return (
        <Container fluid className="common-container">
            <Row className="mt-2 mt-md-3 mt-lg-4">
                <Col>
                    <Stack
                        gap={2}
                        className="paragraph-decoration mb-4"
                        // style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
                    >
                        <div
                            className={
                                "h2 text-center" +
                                (darkMode ? " color-primary" : "")
                            }
                            style={{
                                fontFamily:
                                    "Verdana, Geneva, Tahoma, sans-serif",
                            }}
                        >
                            My Resume
                        </div>
                        <div className="text-center mt-3">
                            <button
                                className={
                                    "btn download-pdf " +
                                    (darkMode ? " download-pdf-dark" : "")
                                }
                                onClick={downloadResume}
                            >
                                Download as PDF
                            </button>
                        </div>
                        <div className="">
                            I am a Full Stack Web Developer with 3+ years of
                            experience in learning and working with different
                            web technologies. I am also a Competitive
                            Programmer. I have a good understanding of Data
                            Structures and Algorithms.
                        </div>
                        <div>
                            <div
                                className={
                                    "h4 fw-semibold text-center mb-4 " +
                                    (darkMode ? " color-primary" : "")
                                }
                            >
                                SKILLS
                            </div>
                            <div>
                                <ul
                                    className="mb-0"
                                    style={{ textAlign: "left" }}
                                >
                                    {resumeSkills.map((skill, index) => {
                                        return (
                                            <li key={index} className="">
                                                <strong
                                                    className={
                                                        darkMode
                                                            ? "color-primary"
                                                            : ""
                                                    }
                                                >
                                                    {" "}
                                                    {skill.skillType}:{" "}
                                                </strong>
                                                {skill.skills}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div
                                className={
                                    "h4 fw-semibold text-center mb-4 " +
                                    (darkMode ? " color-primary" : "")
                                }
                            >
                                PROJECTS
                            </div>
                            {resumeProjects.map((project, index) => {
                                return (
                                    <div key={index}>
                                        <div
                                            className={
                                                "h5 fw-semibold d-sm-flex p-0 m-0 " +
                                                (darkMode
                                                    ? "color-primary"
                                                    : "")
                                            }
                                        >
                                            <div className="me-auto">
                                                {project.title} -{" "}
                                                <a
                                                    href={project.link}
                                                    className="button-link"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {" "}
                                                    {project.linkText}
                                                </a>{" "}
                                            </div>
                                            <div className="text-start">
                                                {project.year}
                                            </div>
                                        </div>
                                        <div className="text-start m-0">
                                            {project.technology}
                                        </div>
                                        {project.features ? (
                                            <ul>
                                                {project.features.map(
                                                    (feature, index1) => {
                                                        return (
                                                            <li key={index1}>
                                                                {feature}
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        ) : null}
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <div
                                className={
                                    "h4 fw-semibold text-center mb-4 " +
                                    (darkMode ? " color-primary" : "")
                                }
                            >
                                EDUCATION
                            </div>
                            <div className="text-start">
                                {resumeEducation.map((education, index) => {
                                    return (
                                        <div key={index}>
                                            <div
                                                className={
                                                    "h5 fw-semibold d-md-flex p-0 m-0 " +
                                                    (darkMode
                                                        ? "color-primary"
                                                        : "")
                                                }
                                            >
                                                {education.institution}
                                            </div>
                                            <div className="m-0 p-0">
                                                {education.degree}
                                            </div>
                                            <div className="m-0 p-0">
                                                {education.duration}
                                            </div>
                                            <div className="fst-italic m-0 p-0">
                                                {education.address}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <div
                                className={
                                    "h4 fw-semibold text-center mb-4 " +
                                    (darkMode ? " color-primary" : "")
                                }
                            >
                                EXPERIENCE
                            </div>
                            <div className="text-start">
                                {resumeExperience.map((experience, index) => {
                                    return (
                                        <div key={index}>
                                            <div
                                                className={
                                                    "h5 fw-semibold d-md-flex p-0 m-0 " +
                                                    (darkMode
                                                        ? "color-primary"
                                                        : "")
                                                }
                                            >
                                                {experience.type}

                                                {experience.link ? (
                                                    <div className="m-0 p-0 ps-1">
                                                        <span>{" - "}</span>
                                                        <a
                                                            href={
                                                                experience.link
                                                            }
                                                            className="button-link"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {
                                                                experience.linkText
                                                            }
                                                        </a>
                                                    </div>
                                                ) : null}
                                            </div>
                                            <ul>
                                                {experience.list.map(
                                                    (item, index1) => {
                                                        return (
                                                            <li
                                                                key={index1}
                                                                className="m-0 p-0"
                                                            >
                                                                {item}
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
};

export default Resume;
