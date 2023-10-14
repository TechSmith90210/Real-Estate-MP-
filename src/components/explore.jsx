// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import "./explore.css";
import { Map } from "./map";

export const Explore = () => {
    
  return (
    <div>
      <Container id="containwithmap" fluid="md">
        <Row>
          <Col>
            <h1>Explore Top Localities</h1>
          </Col>
          <Button
            className="buttons1"
            variant="light"
          >
            <span style={{ fontWeight: "bold" }}>Thane</span>
            <br />
            ₹12.4 K/ bedroom
          </Button>
          <Button className="buttons1" variant="light">
            <span style={{ fontWeight: "bold" }}>Mira Road East</span>
            <br />
            ₹11.1 K/ bedroom
          </Button>
          <Button className="buttons1" variant="light">
            <span style={{ fontWeight: "bold" }}>Powai</span>
            <br />
            ₹27.9 K/ bedroom
          </Button>
          <Button className="buttons1" variant="light">
            <span style={{ fontWeight: "bold" }}>Chembur</span>
            <br />
            ₹23.7 K/ bedroom
          </Button>
          <Col>
            <div className="containerformap">
              <Map />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
