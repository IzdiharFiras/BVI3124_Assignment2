import React from "react";
import { aboutData } from "../data";

const About = () => (
  <section id="about">
    <h2><strong>About Me</strong></h2>
    <p>{aboutData.background}</p>
    <p>{aboutData.passion}</p>
    <p>{aboutData.goals}</p>
    <p>{aboutData.values}</p>
    <p>Hobbies: {aboutData.hobbies}</p>
  </section>
);

export default About;
