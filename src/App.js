import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Stack } from "react-bootstrap";
import "./style/App.css";

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
          ...todos,
          {
            ID: todos.length,
            NAME: newTodo,
            COMPLETED: false,
          },
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
      <Container className="my-5">
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            type="text"
            ref={inputTodoRef}
            placeholder="Enter todo"
          />
          <Button
            variant="outline-success"
            className="custom-button"
            onClick={handleAddTodo}
          >
            Add Todo
          </Button>
          <div className="vr" />
          <Button
            variant="outline-danger"
            className="custom-button"
            onClick={handleClearTodo}
          >
            Clear Todo
          </Button>
        </Stack>
      </Container>
      <Container>
        <TodoList
          todos={todos}
          handleCheckboxStateChange={handleCheckboxStateChange}
        />
      </Container>
    </>
  );
}

export default App;
