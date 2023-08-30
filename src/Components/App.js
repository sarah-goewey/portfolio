import React, { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>sarah goewey</h1>
        </div>
        <div className="col">
          <div className="dropdown">
            <button
              className="btn btn-secondary btn-lg dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              menu
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/">
                  about
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/resume">
                  resume & contact
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/projects">
                  projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
