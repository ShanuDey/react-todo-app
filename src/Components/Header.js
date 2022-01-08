import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar fixed="top" variant="light" bg="light">
        <Container style={{ justifyContent: "center" }}>
          <Navbar.Brand href="#">Todo List</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
