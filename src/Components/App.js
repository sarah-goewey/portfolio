import React, { useEffect } from "react";
import Home from "./Home";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Sarah Goewey</h1>

      <nav>
        <Link to="/">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
