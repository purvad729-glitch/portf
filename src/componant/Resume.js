import React from "react";
import "./components.css";

const Resume = () => (
  <section className="section">
    <h2>Resume</h2>
    <p>
      You can view or download my resume below:
    </p>
    <a
      href="./resume.jpeg"
      target="_self"
      rel="noopener noreferrer"
      className="btn"
    >
      View Resume
    </a>

   
  </section>
);

export default Resume;
