// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./hero.css";

const Hero = () => {
  return (
    <Container fluid style={{ fontFamily: "Lato", fontWeight: "bolder" }}>
      <Row>
        <Col id="hero1">
          <span style={{ fontSize: 75 }}>Easy Home Finding:</span>

          <span style={{ color: "#535657" }}>
            {" "}
            Where Dreams Begin
            <br />
          </span>
          <span
            style={{
              fontSize: 15,
              letterSpacing: 2,
              fontStyle: "italic",
              marginLeft: 5,
            }}
          >
            Your dream home, one click away.
          </span>
        </Col>

        <Col id="hero2">
          <br />
          <br />

          <Container
            fluid="sm"
            id="transparentselector"
            className="text-center"
            style={{ backgroundColor: "#DEE7E7" }}
          >
            <Row>
              <Col>
                <Button className="buttons" size="sm" variant="Link">
                  House
                </Button>
              </Col>
              <Col>
                <Button className="buttons" size="sm" variant="Link">
                  Flat
                </Button>
              </Col>
              <Col>
                <Button className="buttons" size="sm" variant="Link">
                  Pg/Co-living
                </Button>
              </Col>
            </Row>
          </Container>
          <br />
          <Row>
            <Container id="heroform" fluid="sm" className="bg-light w-75">
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Location"
                />
                <DropdownButton
                  variant="outline-secondary"
                  title="Dropdown"
                  id="input-group-dropdown-2"
                  align="end"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Budget"
                />
                <DropdownButton
                  variant="outline-secondary"
                  title="Dropdown"
                  id="input-group-dropdown-2"
                  align="end"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Filter"
                />
                <DropdownButton
                  variant="outline-secondary"
                  title="Dropdown"
                  id="input-group-dropdown-2"
                  align="end"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              <div className="d-grid gap-2">
                <Button variant="dark" size="lg">
                  Search
                </Button>
              </div>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
