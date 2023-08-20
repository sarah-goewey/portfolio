import React, { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>sarah goewey</h1>

      <nav>
        <Link to="/">about</Link>
        <Link to="/resume">resume</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
