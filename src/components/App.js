import React from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";
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
