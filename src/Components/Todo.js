import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

export default function Todo({ todo, handleCheckboxStateChange }) {
  const [checkState, setCheckState] = useState(todo.COMPLETED);

  useEffect(() => {
    handleCheckboxStateChange(todo.ID, checkState);
  }, [checkState]);

  return (
    <ListGroup.Item>
      <div className="form-check ">
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.COMPLETED}
          onChange={(e) => setCheckState(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          {todo.NAME}
        </label>
      </div>
    </ListGroup.Item>
  );
}
