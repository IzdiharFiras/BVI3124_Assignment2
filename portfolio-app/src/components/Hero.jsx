import React from "react";
import { heroData, contactData } from "../data";
import "../App.css";

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-container">
      <div className="hero-image">
        <img src="/FIRAS.png" alt="Profile" className="circle-image" />
      </div>
      <div className="hero-info">
        <h2>{heroData.name}</h2>
        <h3>{heroData.role}</h3>
        <p>{heroData.tagline}</p>
        <p><strong>Phone:</strong> {contactData.phone}</p>
        <p><strong>Address:</strong> {contactData.location}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
        <div className="hero-links">
          <a href={heroData.linkedin}>LinkedIn</a> | 
          <a href={heroData.github}>GitHub</a> | 
          <a href={`mailto:${heroData.email}`}>Email</a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
