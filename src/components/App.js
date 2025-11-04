import React, { useEffect, useMemo, useState } from "react";
import ReactMemo from "./ReactMemo";
import UseMemo from "./UseMemo";
import "./styles.css";

export default function App() {
  // todos + counter
  const [todos, setTodos] = useState(["Read docs", "Practice React"]);
  const [counter, setCounter] = useState(0);

  // custom input + validation
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  // validate on change
  useEffect(() => {
    if (!text) {
      setError("");
    } else if (text.trim().length <= 5) {
      setError("Task must be more than 5 characters");
    } else {
      setError("");
    }
  }, [text]);

  // handlers
  const addNewTodo = () => {
    setTodos((t) => [...t, "New todo"]);
  };

  const increment = () => {
    setCounter((c) => c + 1);
  };

  const onSubmitCustom = (e) => {
    e.preventDefault();
    if (!error && text.trim().length > 5) {
      setTodos((t) => [...t, text.trim()]);
      setText("");
    }
  };

  // useMemo: derive a computed value (simulate heavier calc)
  const longCalcResult = useMemo(() => {
    // pretend-expensive: sum of numbers up to counter * 50_000 (fast but shows memo usage)
    let total = 0;
    const N = counter * 50000; // grows with counter
    for (let i = 1; i <= N; i++) total += i;
    return total;
  }, [counter]);

  return (
    <div id="main" className="container">
      <h1>Task Management App (React Memo)</h1>

      {/* Controls */}
      <div className="controls">
        <button
          id="add-btn"
          data-test-id="add-todo-btn"
          onClick={addNewTodo}
        >
          Add Todo
        </button>

        <button
          id="inc-btn"
          data-test-id="increment-btn"
          onClick={increment}
        >
          Increment Counter
        </button>

        <span className="counter" id="counter-value" data-test-id="counter-value">
          Counter: {counter}
        </span>
      </div>

      {/* Custom input */}
      <form className="add-form" onSubmit={onSubmitCustom}>
        <input
          id="memo-input"
          data-test-id="memo-input"
          type="text"
          placeholder="Enter a custom task (>5 chars)"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          id="submit-btn"
          data-test-id="submit-btn"
          type="submit"
          disabled={!!error || text.trim().length === 0}
        >
          Submit
        </button>
      </form>
      {error ? (
        <p className="error" id="error-text" data-test-id="error-text">{error}</p>
      ) : null}

      {/* Memo demo components */}
      <UseMemo counter={counter} longCalcResult={longCalcResult} />

      {/* React.memo list to avoid unnecessary re-renders */}
      <ReactMemo todos={todos} />

    </div>
  );
}


