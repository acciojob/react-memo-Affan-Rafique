import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [todos, setTodos] = useState(["read docs"]);
  const [counter, setCounter] = useState(0);

  // useMemo optimization
  const totalChars = useMemo(
    () => todos.reduce((sum, t) => sum + t.length, 0),
    [todos]
  );

  // ✅ "New todo" — matches Cypress test
  const addNewTodo = () => setTodos((prev) => [...prev, "New todo"]);
  const inc = () => setCounter((c) => c + 1);

  return (
    <section id="usememo-card" className="card">
      <h2>Use Memo testing</h2>

      {/* Cypress will find this <button> */}
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
    </section>
  );
}
