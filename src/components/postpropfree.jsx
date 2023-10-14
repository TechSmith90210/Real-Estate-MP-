// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";
import "./postpropfree.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Postpropfree = () => {
  return (
    <section>
      <div>
        <Container
          id="contain1"
          style={{ fontFamily: "Lato", fontWeight: "bolder" }}
          fluid="md"
        >
          <Row>
            <Col>
              <Row>
                <span style={{ fontSize: 40 }}>
                  Register to post your property for{" "}
                  <span style={{ color: "green" }}>Free</span>
                </span>
              </Row>
              <Row>
                <h6 style={{ letterSpacing: 3 }}>
                  Post your residential / commercial property
                </h6>
              </Row>
              <br />
              <Row>
                <Col>
                  <h4 id="propsfeature">10L+</h4>
                  <h6>Properties Listed</h6>
                </Col>
                <Col>
                  <h4 id="propsfeature">45L+</h4>
                  <h6>Monthly Searches</h6>
                </Col>
                <Col>
                  <h4 id="propsfeature">2L+</h4>
                  <h6>Owners advertise monthly</h6>
                </Col>
              </Row>
              <Row>
                <Button id="postpropbtn" className="w-75" variant="dark">
                  Post Your Property for Free!
                </Button>
              </Row>
            </Col>
            <Col>
              <Image
                id="forsale"
                src="src\assets\for sale.svg"
                height={300}
                width={500}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Postpropfree;
