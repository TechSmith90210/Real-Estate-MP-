// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Image, Row, Button, Card } from "react-bootstrap";
import "./styles/services.css";
import PropTypes from "prop-types";

export const Services = () => {
  return (
    <div className="divservices">
      <Container fluid className="servicescontain1">
        <Row>
          <Col>
            <h6>Homeyz</h6>
            <h1>
              <span id="exploreservices" style={{ fontWeight: "bold" }}>
                Explore our <u>services</u>
              </span>
            </h1>
          </Col>
          <Col>
            <Image className="servicesimg" src="src\assets\servicesimg2.svg" />
          </Col>
        </Row>
        <Servicesbtn
          serviceImageUrl="src\assets\contract1.svg"
          servicetitle="Smart Rental Agreements"
          desc="Create and sign rental agreements online for a seamless renting
          experience."
        />
        <Servicesbtn
          serviceImageUrl="src\assets\autopayments1.svg"
          servicetitle="Autopayments"
          desc="Effortless and timely rent transactions for tenants."
        />
        <Servicesbtn
          serviceImageUrl="src\assets\prebook.svg"
          servicetitle="Fast Prebooking"
          desc="Secure your dream space in advance."
        />
        <Servicesbtn
          serviceImageUrl="src\assets\spotlight.svg"
          servicetitle="Property Spotlight"
          desc="Featured Properties: Expert Picks & Popular Hits!"
        />
        <Servicesbtn
          serviceImageUrl="src\assets\rent.svg"
          servicetitle="Versatile Rental Options"
          desc="Diverse choices including apartments, land, villas, and more."
        />
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
};

const ServiceCard = (props) => {
  return (
    <Button variant="link" style={{ textDecoration: "none" }}>
      <Card style={{ width: "12vw", height: "40vh" }}>
        <Card.Img
          variant="top"
          src={props.imageUrl}
          style={{ maxHeight: 100 }}
        />
        <Card.Body className="p-2">
          <Card.Title
            style={{ fontWeight: "bold", fontSize: "large", textAlign: "left" }}
          >
            {props.title}
          </Card.Title>
          <Card.Text style={{ fontSize: "medium", textAlign: "left" }}>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Button>
  );
};
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const Servicesbtn = (props) => {
  return (
    <Button variant="Link" id="btnforservices">
      <Row>
        <Col md="2">
          <Image fluid src={props.serviceImageUrl} width={150} />
        </Col>
        <Col md="8">
          <Container fluid>
            <Row>
              <h1 style={{ fontWeight: "bold", textAlign: "left" }}>
                {props.servicetitle}
              </h1>
              <h4 className="desc" style={{ textAlign: "left" }}>
                {props.desc}
              </h4>
            </Row>
          </Container>
        </Col>
      </Row>
    </Button>
  );
};
Servicesbtn.propTypes = {
  serviceImageUrl: PropTypes.string.isRequired,
  servicetitle: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
