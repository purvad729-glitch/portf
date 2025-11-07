import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componant/Navbar";
import "./App.css";

const About = lazy(() => import("./componant/About"));
const Projects= lazy(() => import("./componant/Projects"));
const Skills = lazy(() => import("./componant/Skills"));
const Resume= lazy(() => import("./componant/Resume"));
const Contact = lazy(() => import("./componant/Contact"));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
