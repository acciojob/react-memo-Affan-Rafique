import React, { useState } from "react";

/**
 * Cypress expects:
 *  - an <input> and an "Add Skill" button
 *  - clicking adds a list item with the input text
 */
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
    setSkills((s) => [...s, v]);
    setText("");
  };

  return (
    <div className="card" id="reactmemo-card" style={{ marginTop: 12 }}>
      <h2>React Memo testing</h2>

      <input
        type="text"
        placeholder="Enter a skill"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addSkill} style={{ marginLeft: 8 }}>
        Add Skill
      </button>

      <SkillList skills={skills} />
    </div>
  );
}
