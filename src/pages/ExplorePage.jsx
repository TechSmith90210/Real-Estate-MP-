import React from "react";
import Navbar_ from "../components/navbar_";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import "../components/styles/explorepage.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { PropCardRecent } from "../components/Discover";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
export const ExplorePage = () => {
  return (
    <div>
      <Navbar_ />
      <Filter />
      <br />
      <ChipsArray />
    </div>
  );
};

const Filter = () => {
  return (
    <div>
      <Container fluid id="filtercontain">
        <Row>
          <Col md="auto">
            <InputGroup size="md">
              <Form.Control
                placeholder="Search Address"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
              <Button>Search</Button>
            </InputGroup>
          </Col>
          <Col>
            <DropdownButton
              size="md"
              id="dropdown-item-button"
              variant="dark"
              title="BHK"
            >
              <Dropdown.Item as="button">1 BHK</Dropdown.Item>
              <Dropdown.Item as="button">2 BHK</Dropdown.Item>
              <Dropdown.Item as="button">3 BHK</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton
              size="md"
              id="dropdown-item-button"
              variant="dark"
              title="Price"
            >
              <Dropdown.Item as="button">₹0 - ₹20,000</Dropdown.Item>
              <Dropdown.Item as="button">₹20,000 - ₹40,000</Dropdown.Item>
              <Dropdown.Item as="button">₹40,000 - more</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton
              size="md"
              id="dropdown-item-button"
              variant="dark"
              title="Type"
            >
              <Dropdown.Item as="button">House</Dropdown.Item>
              <Dropdown.Item as="button">Flat</Dropdown.Item>
              <Dropdown.Item as="button">PG / Co-Living</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton
              size="md"
              id="dropdown-item-button"
              variant="primary"
              title="Sort"
            >
              <Dropdown.Item as="button">By Price</Dropdown.Item>
              <Dropdown.Item as="button">Newest</Dropdown.Item>
              <Dropdown.Item as="button">Popular</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const FilterClickableBtn = () => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Row>
      <Col>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Clickable Deletable"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            label="Clickable Deletable"
            variant="outlined"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        </Stack>
      </Col>
    </Row>
  );
};
const ChipsArray = () => {
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        backgroundColor: "transparent", // Set background color to transparent
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === "React") {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === "React" ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
};
