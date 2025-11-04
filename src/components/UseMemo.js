import React, { useMemo, useState } from "react";

/**
 * Cypress expects:
 *  - a <button> inside this component
 *  - clicking it adds an item with content exactly "new todo"
 */
export default function UseMemo() {
  const [todos, setTodos] = useState(["read docs"]);
  const [counter, setCounter] = useState(0);

  // Simple memo: derived total characters across todos (recomputes only when todos change)
  const totalChars = useMemo(
    () => todos.reduce((sum, t) => sum + t.length, 0),
    [todos]
  );

  const addNewTodo = () => setTodos((t) => [...t, "new todo"]);
  const inc = () => setCounter((c) => c + 1);

  return (
    <div className="card" id="usememo-card">
      <h2>Use Memo testing</h2>

      <button onClick={addNewTodo}>Add todo</button>
      <button onClick={inc} style={{ marginLeft: 8 }}>Increment</button>
      <p>Counter: <strong>{counter}</strong></p>

      <p data-test-id="heavy-value">
        Total characters (memoized): {totalChars}
      </p>

      <ul id="todo-list">
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
