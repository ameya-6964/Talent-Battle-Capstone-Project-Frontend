import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Shop City 🛍️</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto md:mx-5 ">
              <LinkContainer to="/">
                <Nav.Link>Top Wear</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Bottom Wear</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Foot Wear</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Sports</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Electronics</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
