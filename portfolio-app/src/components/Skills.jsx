import React from "react";
import SkillCard from "./SkillCard";
import { skillsData } from "../data";

const Skills = () => (
  <section id="skills">
    <h2><strong>Skills & Technologies</strong></h2>
    <div className="skills-grid">
      {skillsData.map((skill, i) => (
        <SkillCard key={i} category={skill.category} items={skill.items} />
      ))}
    </div>
  </section>
);

export default Skills;
