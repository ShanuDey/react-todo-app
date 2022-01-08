import React from "react";
import Todo from "./Todo";
import { Card, ListGroup } from "react-bootstrap";
import "./style/TodoList.css";

export default function TodoList({ todos, handleCheckboxStateChange }) {
  return (
    <Card>
      <Card.Header className="fw-bold fs-3 card-header-custom ">
        Todo List
      </Card.Header>
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
    </Card>
    // <div>
    //   <h3> Todo List: </h3>
    //   {todos.map((todo) => {
    //     return (
    //       <Todo
    //         todo={todo}
    //         key={todo.ID}
    //         handleCheckboxStateChange={handleCheckboxStateChange}
    //       />
    //     );
    //   })}
    // </div>
  );
}
