// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "./discover.css";
import PropTypes from "prop-types";

export const Discover = () => {
  return (
    <div>
      <Container fluid={true}>
        <Row>
          <Col>
            <h1 style={{ fontWeight: "bold" }}>Recently Added</h1>
            <h6 style={{ color: "grey" }}>
              Based on preferences of users like you
            </h6>
          </Col>
        </Row>
        <Row>
          <PropCardRecent
            imageUrl="src\assets\discoverpropimg1.jpg"
            propertyname="1 BHK Apartment"
            desc="123 MG Road, Bengaluru"
            price="₹15,000"
          />
          <PropCardRecent
            imageUrl="src\assets\discoverpropimg2.jpg"
            propertyname="2 BHK Villa"
            desc="456 Juhu Beach, Mumbai"
            price="₹25,000"
          />
          <PropCardRecent
            imageUrl="src\assets\discoverpropimg3.jpg"
            propertyname="3 BHK Penthouse"
            desc="789 Connaught Place, New Delhi"
            price="₹35,000"
          />
          <PropCardRecent
            imageUrl="src\assets\discoverpropimg5.jpg"
            propertyname="Studio Apartment"
            desc="101 Koregaon Park, Pune"
            price="₹10,000"
          />
        </Row>
      </Container>
    </div>
  );
};

const PropCardRecent = (props) => {
  return (
    <Col>
      <div>
        <Button variant="Link">
          <Col>
            <Row>
              <Container fluid width="200">
                <Image
                  className="imageforrecent"
                  src={props.imageUrl}
                  rounded
                />
              </Container>
            </Row>
            <Row>
              <h4 style={{ fontWeight: "bold", textAlign: "left" }}>
                {props.propertyname}
              </h4>
            </Row>
            <Row>
              <h6 style={{ color: "grey", textAlign: "left" }}>{props.desc}</h6>{" "}
            </Row>
            <Row>
              <Button variant="dark" size="lg" className="recentbtn">
                {props.price}
              </Button>
            </Row>
          </Col>
        </Button>
      </div>
    </Col>
  );
};

PropCardRecent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  propertyname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
