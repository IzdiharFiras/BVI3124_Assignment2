import React from "react";
import "../App.css";

const SkillCard = ({ category, items }) => {
  return (
    <div className="skill-card">
      <h3><strong>{category}</strong></h3>
      <ul className="skill-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
