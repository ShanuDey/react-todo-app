import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./Components/TodoList";
import { v4 as uuidv4 } from "uuid";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const LOCAL_STORAGE_KEY = "MyTodoKey";

function App() {
  const [todos, setTodos] = useState(() => {
    const stotedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return stotedTodos || [];
  });
  const inputTodoRef = useRef("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo() {
    const newTodo = inputTodoRef.current.value;
    if (newTodo) {
      setTodos(() => {
        return [
          {
            ID: uuidv4(),
            NAME: newTodo,
            COMPLETED: false,
          },
          ...todos
        ];
      });
      inputTodoRef.current.value = "";
    }
  }

  function handleClearTodo() {
    setTodos(() => todos.filter((todo) => !todo.COMPLETED));
  }

  function handleCheckboxStateChange(id, state) {
    const updatedTodoIndex = todos.findIndex((todo) => todo.ID === id);
    let tempTodo = [...todos];
    tempTodo[updatedTodoIndex].COMPLETED = state;
    setTodos(tempTodo);
  }

  return (
    <>
      <Header />
      <TodoList
        todos={todos}
        handleCheckboxStateChange={handleCheckboxStateChange}
      />
      <Footer
        inputTodoRef={inputTodoRef}
        handleAddTodo={handleAddTodo}
        handleClearTodo={handleClearTodo}
      />
    </>
  );
}

export default App;
