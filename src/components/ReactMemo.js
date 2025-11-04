import React, { useState } from "react";

// ✅ React.memo used for performance
const SkillList = React.memo(function SkillList({ skills }) {
  return (
    <ul id="skill-list" data-test-id="skill-list">
      {skills.map((s, i) => (
        <li key={i} data-test-id="skill-item">{s}</li>
      ))}
    </ul>
  );
});

export default function ReactMemo() {
  const [skills, setSkills] = useState(["javascript"]);
  const [text, setText] = useState("");

  const addSkill = () => {
    const v = text.trim();
    if (!v) return;
    setSkills((arr) => [...arr, v]);
    setText("");
  };

  return (
    <section id="reactmemo-card" className="card">
      <h2>React Memo testing</h2>

      {/* Cypress expects an <input> here */}
      <input
        type="text"
        placeholder="Enter a skill"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Cypress expects an <Add Skill> button */}
      <button onClick={addSkill} style={{ marginLeft: 8 }}>
        Add Skill
      </button>

      <SkillList skills={skills} />
    </section>
  );
}
