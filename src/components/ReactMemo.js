import React from "react";

/**
 * React.memo prevents unnecessary re-renders if props (todos) don't change.
 * We also expose data-test-ids for Cypress.
 */
function TodoList({ todos }) {
  return (
    <div className="card" id="reactmemo-card">
      <h2>Todos</h2>
      <ul id="todo-list" data-test-id="todo-list">
        {todos.map((t, i) => (
          <li key={i} className="todo-item" data-test-id="todo-item">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(TodoList);
