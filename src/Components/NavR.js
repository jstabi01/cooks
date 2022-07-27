import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavR() {
  return (
    <Navbar style={{padding: "0"}} bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{color: "lavender"}} href="#home">Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavR;