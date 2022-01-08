import React, { useState, useEffect } from "react";

export default function Todo({ todo, handleCheckboxStateChange }) {
  const [checkState, setCheckState] = useState(false);

  useEffect(() => {
    handleCheckboxStateChange(todo.ID, checkState);
  }, [checkState]);

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={todo.COMPLETED}
        onChange={(e) => setCheckState(e.target.value)}
      />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        {todo.NAME}
      </label>
    </div>
  );
}
