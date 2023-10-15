// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./navbar.css";
import { LinkContainer } from "react-router-bootstrap";

export const Navbar_ = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      id="navbar1"
      fixed="top"
      collapseOnSelect
      expand="lg"
      className={scrolled ? "bg-body-light scrolled" : "bg-body-light"}
      style={{ fontFamily: "Lato", fontWeight: "bold" }}
    >
      <Container>
        <Navbar.Brand
          href="home"
          style={{ fontFamily: "Lato", fontWeight: "bold" }}
        >
          <LinkContainer to="/home">
            <div>
              <img
                src="src\assets\favicon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
              Homeyz
            </div>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/Explore">
              <Nav.Link>Explore</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Rent">
              <Nav.Link>Rent Agreement</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ListProperty">
              <Nav.Link>List Property</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/Login">
              <Nav.Link>
                <Button variant="dark">Login</Button>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Register">
              <Nav.Link>
                <Button variant="light">Register</Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar_;
