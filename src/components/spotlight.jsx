import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./styles/spotlight.css";

export const Spotlight = () => {
  const properties = [
    {
      title: "Luxury Villa in Bangalore",
      address: "123 MG Road, Bengaluru",
      imageSrc: "src/assets/spotimg1.jpg",
    },
    {
      title: "Seaside Apartment in Mumbai",
      address: "456 Juhu Beach, Mumbai",
      imageSrc: "src/assets/spotimg2.jpg",
    },
    {
      title: "Penthouse with a View in Delhi",
      address: "789 Connaught Place, New Delhi",
      imageSrc: "src/assets/spotimg3.jpg",
    },
  ];

  return (
    <div>
      <h6 style={{ color: "grey" }}>Spotlight</h6>
      <h2 style={{ fontWeight: "bold", marginBottom: 10 }}>
        <span style={{ fontSize: "larger" }}>Property Spotlight: </span>
        <span style={{ color: "#E43F6F" }}>Must-See Listings!</span>
      </h2>
      <div>
        <Carousel fade>
          {properties.map((property, index) => (
            <Carousel.Item key={index}>
              <a href="#">
                <img
                  className="d-block w-100"
                  src={property.imageSrc}
                  alt={`Slide ${index + 1}`}
                />
                <Carousel.Caption>
                  <h3 style={{ fontWeight: "bold" }}>{property.title}</h3>
                  <p>{property.address}</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
