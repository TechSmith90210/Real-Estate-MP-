import React from "react";
import { Col, Container, Image, Row, Button, Card } from "react-bootstrap";
import "./services.css";
import PropTypes from "prop-types";

export const Services = () => {
  return (
    <div className="divservices">
      <Container fluid className="servicescontain1">
        <Row>
          <Col>
            <h6>Homeyz</h6>
            <h1>
              <span style={{ fontWeight: "bold" }}>Explore our services </span>
            </h1>
          </Col>
          <Col>
            <Image className="servicesimg" src="src\assets\servicesimg2.svg" />
          </Col>
        </Row>
        <Container
          fluid
          className="divservices2"
          style={{ paddingLeft: 0  , paddingRight: 0 }}
        >
          <Row className="m-0">
            <Col>
              <ServiceCard
                title="Rental Services"
                description="Apartments, land, builder floors, villas and more"
                imageUrl="src/assets/servicesimg.jpg"
              />
            </Col>
            <Col>
              <ServiceCard
                title="Spotlight"
                description="Showcasing premium properties for discerning buyers."
                imageUrl="src\assets\services-img4.jpg"
              />
            </Col>
            <Col>
              <ServiceCard
                title="Rental Agreements"
                description="Hassle-free documentation for secure renting."
                imageUrl="src\assets\services-img5.jpg"
              />
            </Col>
            <Col>
              <ServiceCard
                title="Prebooking / Large Deposit"
                description=" Secure your dream space in advance."
                imageUrl="src\assets\services-img3.jpg"
              />
            </Col>
            <Col>
              <ServiceCard
                title="Autopayments"
                description="Effortless and timely rent transactions for tenants."
                imageUrl="src/assets/services-img2.jpg"
              />
            </Col>
          </Row>
        </Container>
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
  imageUrl: PropTypes.string.isRequired, // Add this line
};
