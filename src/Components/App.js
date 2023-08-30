import React, { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>sarah goewey</h1>

      <nav>
        <Link to="/">about</Link>
        <Link to="/resume">resume & contact</Link>
        <Link to="/projects">projects</Link>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
