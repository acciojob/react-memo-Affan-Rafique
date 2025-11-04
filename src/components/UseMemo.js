import React, { useEffect, useMemo, useState } from "react";

// Expensive dummy calc just to demo useMemo
const heavyCountCalc = (n) => {
  let total = 0;
  for (let i = 0; i < 500000; i++) total += i % 7;
  return n + total;
};

export default function UseMemo() {
  const [todos, setTodos] = useState(["learn react"]);
  const [count, setCount] = useState(0);
  const [custom, setCustom] = useState("");
  const [error, setError] = useState("");

  // useMemo example
  const computed = useMemo(() => heavyCountCalc(count), [count]);

  // useEffect example
  useEffect(() => {
    if (custom.length > 0 && custom.length <= 5) {
      setError("Task must be more than 5 characters");
    } else {
      setError("");
    }
  }, [custom]);

  const addDefaultTodo = () => {
    // ✅ the tests expect exactly "new todo"
    setTodos((t) => [...t, "new todo"]);
  };

  const addCustom = () => {
    if (custom.trim().length > 5) {
      setTodos((t) => [...t, custom.trim()]);
      setCustom("");
    }
  };

  return (
    <section>
      <h2>useMemo demo</h2>

      {/* ✅ Cypress looks for a button with the text "Add Todo" */}
      <button onClick={addDefaultTodo}>Add Todo</button>

      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>Counter: {count}</div>
      <div>Computed: {computed}</div>

      <input
        type="text"
        placeholder="Enter custom task"
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
      />
      <button onClick={addCustom}>Submit</button>
      {error && <p role="alert">{error}</p>}

      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
