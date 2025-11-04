import React, { useMemo, useState } from "react";

/**
 * Cypress expects:
 *  - a <button> in this component
 *  - clicking it should add an li with text exactly "new todo"
 */
export default function UseMemo() {
  const [todos, setTodos] = useState(["read docs"]);
  const [counter, setCounter] = useState(0);

  // Example memoized derived value
  const totalChars = useMemo(
    () => todos.reduce((sum, t) => sum + t.length, 0),
    [todos]
  );

  const addNewTodo = () => setTodos((prev) => [...prev, "new todo"]);
  const inc = () => setCounter((c) => c + 1);

  return (
    <section id="usememo-card" className="card">
      <h2>Use Memo testing</h2>

      {/* The generic button Cypress clicks */}
      <button onClick={addNewTodo}>Add todo</button>

      {/* Counter just to show state changing */}
      <button onClick={inc} style={{ marginLeft: 8 }}>Increment</button>
      <p>Counter: <strong>{counter}</strong></p>

      <p data-test-id="heavy-value">
        Total characters (memoized): {totalChars}
      </p>

      <ul id="todo-list">
        {todos.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </section>
  );
}
