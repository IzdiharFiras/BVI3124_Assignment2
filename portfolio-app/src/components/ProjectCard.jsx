import React from "react";
import "../App.css";

const ProjectCard = ({ title, description, tools, image }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-text">
          <h3><strong>{title}</strong></h3>
          <p>{description}</p>
          <p><strong>Tools:</strong> {tools.join(", ")}</p>
        </div>
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

