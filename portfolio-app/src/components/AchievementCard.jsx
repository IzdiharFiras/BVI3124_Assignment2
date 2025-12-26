import React from "react";

const AchievementCard = ({ title, description, year }) => (
  <div className="achievement-card">
    <h3><strong>{title}</strong></h3>
    <p>{description}</p>
    <small>{year}</small>
  </div>
);

export default AchievementCard;
