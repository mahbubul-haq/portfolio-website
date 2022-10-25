import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { DarkModeContext } from "../context/DarkModeContext";

const Contact = () => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <Container fluid className="common-container">
      <Row className="g-3 mt-2 mt-md-3 mt-lg-4 d-flex justify-content-center align-items-center">
        <Col xs={12}>
          <div
            className={
              "h2 text-center mb-3" + (darkMode ? " color-primary" : "")
            }
            style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
          >
            My Contacts
          </div>
          <div className="fs-5 mb-1">
            Feel free to contact me if you think I can help somehow
          </div>
        </Col>
        <Col xs={12}>
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col">
              <div
                className={
                  "card h-100 " + (darkMode ? " dark-mode-menu" : "text-bg-light")
                }
              >
                <div
                  className={
                    "card-body p-4" + (darkMode ? " color-primary" : "")
                  }
                >
                  <div className="text-center">
                    <AiOutlineMail className="mb-2" size={30} />
                  </div>
                  <div className="h4">Email</div>

                  <div className="h5">
                    <a
                      className="custom-a"
                      href="mailto:mdmahbubulhaque99@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      mdmahbubulhaque99@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className={
                  "card h-100 " + (darkMode ? "dark-mode-menu" : "text-bg-light")
                }
              >
                <div
                  className={
                    "card-body p-4" + (darkMode ? " color-primary" : "")
                  }
                >
                  <div className="text-center">
                    <AiOutlinePhone className="mb-2" size={30} />
                  </div>
                  <div className="h4">Phone</div>

                  <div className="h5">
                    <a
                      className="custom-a"
                      href="tel:+8801795450357"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +8801795450357
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className={
                  "card h-100 " + (darkMode ? "dark-mode-menu" : "text-bg-light")
                }
              >
                <div
                  className={
                    "card-body p-4" + (darkMode ? " color-primary" : "")
                  }
                >
                  <div className="text-center">
                    <AiOutlineWhatsApp className="mb-2" size={30} />
                  </div>
                  <div className="h4">WhatsApp</div>

                  <div className="h5">
                    <a
                      className="custom-a"
                      href="https://wa.me/8801795450357"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +8801795450357
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className={
                  "card h-100 " + (darkMode ? "dark-mode-menu" : "text-bg-light")
                }
              >
                <div
                  className={
                    "card-body p-4" + (darkMode ? " color-primary" : "")
                  }
                >
                  <div className="text-center">
                    <GoLocation className="mb-2" size={30} />
                  </div>
                  <div className="h4">Address</div>

                  <div className="h5">
                    <a
                      className="custom-a"
                      href="https://goo.gl/maps/N15fJBrE7ay6zwiW7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Nazrul Islam Hall, BUET, Dhaka 1211
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
