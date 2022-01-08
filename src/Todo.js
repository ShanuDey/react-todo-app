import React, { useRef } from "react";

export default function Todo({ todo, handleCheckboxStateChange }) {
  const todoCheckBoxRef = useRef(false);

  function handleChange() {
    const state = todoCheckBoxRef.current.checked;
    handleCheckboxStateChange(todo.ID, state);
  }

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={todo.COMPLETED}
        ref={todoCheckBoxRef}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        {todo.NAME}
      </label>
    </div>
  );
}
