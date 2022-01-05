import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, handleCheckboxStateChange }) {
  return (
    <div>
      <h3> Todo List: </h3>
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.ID}
            handleCheckboxStateChange={handleCheckboxStateChange}
          />
        );
      })}
    </div>
  );
}
