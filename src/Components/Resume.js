import React from "react";

const Resume = () => {
  return (
    <div className="container text-center">
      <hr />
      <h1>resume</h1>
      <hr />
      <h2>Sarah Goewey</h2>
      <h5>Software Engineer</h5>
      <h6>New York, NY</h6>
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
      <br />
      <h6>SUMMARY</h6>
      <p>
        Full-stack Software Engineer who recently completed Fullstack Academy's
        Web Development Bootcamp; worked individually and in teams to develop
        multiple full-stack applications. Professional background in customer
        service and inventory management roles enables a unique perspective in
        designing user-friendly and efficient applications. Seeking to leverage
        skills to create user-centric applications.
      </p>
      <br />
      <h6>TECHNICAL SKILLS</h6>
      <div className="row">
        <div className="col">Javascript</div>
        <div className="col">Node</div>
        <div className="col">React/Redux</div>
      </div>
      <div className="row">
        <div className="col">Express</div>
        <div className="col">HTML5</div>
        <div className="col">CSS</div>
      </div>
      <div className="row">
        <div className="col">PostgreSQL</div>
        <div className="col">Git</div>
        <div className="col">WebSockets</div>
      </div>
      <br />
      <h6>TECHNICAL PROJECTS</h6>
      <p>
        <a href="https://backup-cash-register.onrender.com/">
          Backup Cash Register
        </a>{" "}
        | Developer | August 2023{" "}
      </p>
      <p>
        • Developed an intuitive cash register application for assisting retail
        workers whose point-of-sale system has crashed
      </p>
      <p>
        • Employed fixed-point decimal representation when calculating totals on
        the front end
      </p>
      <p>
        • Utilized a PostgreSQL database to enable users to persist and refer to
        their transaction history
      </p>
      <br />
      <p>
        <a href="https://cooking-party.onrender.com/">Cooking Party</a> |
        Co-developer | June 2023{" "}
      </p>
      <p>
        • Worked with three other developers to build a fully functional social
        cooking app
      </p>
      <p>
        • Built full-stack functionality to allow users to send, accept and
        reject friend requests, to make and join groups, and to chat with other
        online users
      </p>
      <p>
        • Used Javascript, React, Redux, Node.js, Express, PostgreSQL,
        WebSockets, Material UI, two third-party recipe APIs, and deployed using
        Render
      </p>
      <br />
      <p>
        <a href="https://spiffy-stickies.onrender.com/#/">Spiffy Stickies</a> |
        Developer | May 2023{" "}
      </p>
      <p>
        • Created a full-stack CRUD app that allows users to create, read,
        update and delete sticky notes
      </p>
      <p>
        • Implemented user authentication and authorization to allow users to
        keep their notes private or share them publicly
      </p>
      <p>
        • Employed technologies such as HTML, CSS, Javascript, React, Redux,
        Node.js, Express, PostgreSQL, and deployed the app using Render
      </p>
      <br />
      <h6>RELEVANT WORK EXPERIENCE</h6>
      <p>
        Ecommerce Bookseller/Receiver/Shiftleader | Greenlight Bookstore |
        Brooklyn, NY
      </p>
      <p>July 2018 - June 2022</p>
      <p>
        • Handled 500+ web orders per week and provided customer support,
        troubleshooting technical issues and improving the overall online
        customer experience
      </p>
      <p>
        • Streamlined inventory management by sorting and receiving incoming
        shipments, executing returns and markdowns, and organizing stock using
        Basil inventory management software
      </p>
      <br />
      <h6>EDUCATION</h6>
      <p>Fullstack Academy Web Development Bootcamp</p>
      <p>December 2022-June 2023</p>
      <p>Software Engineering Certificate</p>
      <br />
      <p>Northern Arizona University</p>
      <p>August 2009-May 2013</p>
      <p>Bachelor of Arts in Theatre Performance</p>
      <p>Graduated Summa Cum Laude with cumulative 4.0 GPA</p>
    </div>
  );
};

export default Resume;
