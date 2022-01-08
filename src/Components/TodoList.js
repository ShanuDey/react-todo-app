import React from "react";
import Todo from "./Todo";
import { Container, ListGroup } from "react-bootstrap";

export default function TodoList({ todos, handleCheckboxStateChange }) {
  return (
    <Container style={{ marginTop: "20vh" }}>
      <ListGroup variant="flush">
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.ID}
              handleCheckboxStateChange={handleCheckboxStateChange}
            />
          );
        })}
      </ListGroup>
    </Container>
  );
}
