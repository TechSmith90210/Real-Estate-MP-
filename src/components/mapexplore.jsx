// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import "./styles/explore.css";
import { Map } from "./map";

export const MapExplore = () => {
  return (
    <div>
      <Container id="containwithmap" fluid="md">
        <Row>
          <Col>
            <h1 style={{ fontWeight: "bold" }}>Explore Top Localities</h1>
          </Col>
          <MapBtn city="Thane" price="₹12.4 K/ bedroom" />
          <MapBtn city="Mira Road East" price=" ₹11.1 K/ bedroom" />
          <MapBtn city="Powai" price="₹₹27.9 K/ bedroom" />
          <MapBtn city="Chembur" price="₹23.7 K/ bedroom" />
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

const MapBtn = (props) => {
  return (
    <Button className="buttons1" variant="light">
      <span style={{ fontWeight: "bold", fontSize: "x-large" }}>
        {props.city}
      </span>
      <br />
      {props.price}
    </Button>
  );
};
