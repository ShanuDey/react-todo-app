import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const inputTodoRef = useRef("");

  function handleAddTodo() {
    const newTodo = inputTodoRef.current.value;
    setTodos(() => {
      return [
        ...todos,
        {
          ID: todos.length,
          NAME: newTodo,
        },
      ];
    });
  }

  function handleClearTodo() {
    setTodos([]);
  }

  return (
    <>
      <input type="text" ref={inputTodoRef} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodo}>Clear Todo</button>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
