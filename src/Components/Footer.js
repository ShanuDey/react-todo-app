import React from "react";
import { Navbar, Container, Stack, Form, Button } from "react-bootstrap";
import "../style/Footer.css";

export default function Footer(props) {
  return (
    <div>
      <Navbar fixed="bottom" variant="light" bg="light">
        <Container>
          <Stack
            direction="horizontal"
            gap={3}
            className="custom-center-footer"
          >
            <Form.Control
              className="me-auto"
              type="text"
              ref={props.inputTodoRef}
              placeholder="Enter todo"
            />
            <Button
              variant="outline-success"
              className="custom-button"
              onClick={props.handleAddTodo}
            >
              Add Todo
            </Button>
            <div className="vr" />
            <Button
              variant="outline-danger"
              className="custom-button"
              onClick={props.handleClearTodo}
            >
              Clear Todo
            </Button>
          </Stack>
        </Container>
      </Navbar>
    </div>
  );
}
