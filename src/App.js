import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  const inputTodoRef = useRef("");

  function handleAddTodo() {
    const newTodo = inputTodoRef.current.value;
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <input type="text" ref={inputTodoRef} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Todo</button>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
