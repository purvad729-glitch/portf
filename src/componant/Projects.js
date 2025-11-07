import React from "react";
import "./components.css";

const Projects = () => (
  <section className="section">
    <h2>Projects</h2>
    <div className="project-grid">
      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>My personal portfolio built with React and deployed on Netlify.</p>
      </div>
      <div className="project-card">
        <h3>Weather App</h3>
        <p>A responsive weather application fetching live data from an API.</p>
      </div>
    </div>
  </section>
);

export default Projects;
