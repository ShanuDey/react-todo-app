import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "MyTodoKey";

function App() {
  const [todos, setTodos] = useState(() => {
    const stotedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return stotedTodos || [];
  });
  const inputTodoRef = useRef("");

  function handleAddTodo() {
    const newTodo = inputTodoRef.current.value;
    setTodos(() => {
      return [
        ...todos,
        {
          ID: todos.length,
          NAME: newTodo,
          COMPLETED: false,
        },
      ];
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
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
