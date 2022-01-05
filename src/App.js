import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);

  return (
    <>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Todo</button>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
