import React from "react";
import AchievementCard from "./AchievementCard";
import { achievementsData } from "../data";

const Achievement = () => (
  <section id="achievements">
    <h2><strong>Achievements</strong></h2>
    <div className="achievement-grid">
      {achievementsData.map((ach, i) => (
        <AchievementCard key={i} {...ach} />
      ))}
    </div>
  </section>
);

export default Achievement;
