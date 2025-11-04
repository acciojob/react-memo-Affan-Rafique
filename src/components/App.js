import React from "react";
import UseMemo from "./UseMemo";       // ✅ relative to components/
import ReactMemo from "./ReactMemo";   // ✅ relative to components/
import "../styles.css";                // ✅ go up one level for CSS

export default function App() {
  return (
    <div id="main" className="container">
      <h1>Task Management App (React Memo)</h1>
      <UseMemo />
      <ReactMemo />
    </div>
  );
}

