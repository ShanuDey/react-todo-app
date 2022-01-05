import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      <h3> Todo List: </h3>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.ID} />;
      })}
    </div>
  );
}
