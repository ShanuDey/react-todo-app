import React, { useRef } from "react";

export default function Todo({ todo, handleCheckboxStateChange }) {
  const todoCheckBoxRef = useRef(false);

  function handleChange() {
    const state = todoCheckBoxRef.current.checked;
    handleCheckboxStateChange(todo.ID, state);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.COMPLETED}
          ref={todoCheckBoxRef}
          onChange={handleChange}
        />
        {todo.ID},{todo.NAME}
      </label>
    </div>
  );
}
