// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";
import { Col, Row, Button, Container } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <Container fluid className="containme">
      <Row>
        <Col>
          <h5>Homeyz</h5>
          <a href="#services">Our Services</a>
          <br />
          <a href="#price-trends">Price Trends</a>
          <br />
          <a href="#post-property">Post Your Property</a>
          <br />
          <a href="#rent-agreement">Rent Agreement</a>
        </Col>
        <Col>
          <h5>Company</h5>
          <a href="#about-us">About Us</a>
          <br />
          <a href="#careers">Careers</a>
          <br />
          <a href="#for-partners">For Partners</a>
          <br />
          <a href="#terms">Terms & Conditions</a>
          <br />
          <a href="#privacy">Privacy Policy</a>
        </Col>
        <Col>
          <h5>Contact Us</h5>
          <h6>
            Toll Free - 1900 41 91299
            <br />
            Monday - Saturday (9:00AM to 11:00PM IST)
            <br />
            Email - feedback@Homeyz.com
          </h6>
          <h4>Connect with us</h4>
          <Container>
            <Row>
              <Col>
                <Button variant="dark" href="#facebook">
                  <BsFacebook />
                </Button>
              </Col>
              <Col>
                <Button variant="dark" href="#instagram">
                  <BsInstagram />
                </Button>
              </Col>
              <Col>
                <Button variant="dark" href="#twitter">
                  <BsTwitter />
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
