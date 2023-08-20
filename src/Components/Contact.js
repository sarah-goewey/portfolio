import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container text-center">
      <hr />
      <h1>contact</h1>
      <hr />
      <div className="row">
        <div className="col">
          <a href="https://www.linkedin.com/in/sarah-goewey-software-engineer/">
            LinkedIn
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/sarah-goewey">GitHub</a>
        </div>
        <div className="col">
          <a href="mailto:sarahgoewey627@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
