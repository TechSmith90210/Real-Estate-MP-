// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./navbar.css";

const Navbar_ = () => {
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
          href="#home"
          style={{ fontFamily: "Lato", fontWeight: "bold" }}
        >
          <img
            src="src\assets\favicon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          Homeyz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#Explore">Explore</Nav.Link>
            <Nav.Link href="#Rent">Rent Agreement</Nav.Link>
            <Nav.Link href="#Loans">Loans</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                List Property
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Consult Experts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#Login">
              <Button variant="dark">Login</Button>
            </Nav.Link>
            <Nav.Link href="#SignUp">
              <Button variant="light">Register</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar_;
