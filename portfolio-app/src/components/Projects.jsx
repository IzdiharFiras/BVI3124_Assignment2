import React from "react";
import { projectsData } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <h2><strong>Projects</strong></h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tools={project.tools}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
