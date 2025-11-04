import React from "react";
import UseMemo from "./UseMemo";     // NOTE: exact case
import ReactMemo from "./ReactMemo"; // NOTE: exact case
import "./styles.css";

export default function App() {
  return (
    <div id="main" className="container">
      <h1>Task Management App (React Memo)</h1>
      <UseMemo />
      <ReactMemo />
    </div>
  );
}
