import React, { useState } from "react";

const Projects = () => {
  const [openItems, setOpenItems] = useState([]);

  const handleAccordionClick = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const isAccordionOpen = (id) => openItems.includes(id);

  return (
    <div>
      <div className="container text-center accordion">
        <hr />
        <h1>projects</h1>
        <hr />
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                isAccordionOpen("collapseOne") ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleAccordionClick("collapseOne")}
            >
              Backup Cash Register
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${
              isAccordionOpen("collapseOne") ? "show" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col">
                  <a href="https://backup-cash-register.onrender.com/#/">
                    Deployed Site
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/sarah-goewey/backup-cash-register-2">
                    GitHub
                  </a>
                </div>
              </div>
              <br />
              <div className="row">
                This project was inspired by a common frustration from my time
                in retail: whenever our point-of-sale system (frequently)
                crashed, we were reduced to using a cumbersome combination of
                calculators and Excel spreadsheets to take cash from customers.
                Backup Cash Register is intended as a sleek, user-friendly plan
                B, calculating discount, tax and change so that harried retail
                workers don't have to. Users can also save their transactions to
                their account, for later reference.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                isAccordionOpen("collapseTwo") ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleAccordionClick("collapseTwo")}
            >
              Caves of Mercury
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${
              isAccordionOpen("collapseTwo") ? "show" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col">
                  <a href="https://caves-of-mercury.onrender.com/">
                    Deployed Site
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/sarah-goewey/harmoniums">
                    GitHub
                  </a>
                </div>
              </div>
              <br />
              <div className="row">
                Caves of Mercury is a deliberately super-simplified social
                platform inspired by my favorite passage from Kurt Vonnegut's
                Sirens of Titan. In Sirens, the caves of Mercury are inhabited
                by a primitive species called Harmoniums who can only
                communicate two thoughts: "I am here" and "So glad you are". And
                isn't this all actually want from social media: to announce our
                presence, and to be acknowledged? Caves of Mercury uses this
                contraint to offer users a zen experience of pure, uncomplicated
                connection.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                isAccordionOpen("collapseThree") ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleAccordionClick("collapseThree")}
            >
              Cooking Party
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${
              isAccordionOpen("collapseThree") ? "show" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col">
                  <a href="https://cooking-party.onrender.com/">
                    Deployed Site
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/cookingparty/cooking-party">
                    GitHub
                  </a>
                </div>
              </div>
              <br />
              <div className="row">
                Built in collaboration with Rebecca Cherry, Angel Gao and
                Nicholas Race as our Fullstack Academy capstone project, Cooking
                Party is a feature-rich social cooking app. It is a platform
                where food enthusiasts, home cooks, and aspiring chefs can come
                together to explore recipes, share their own culinary triumphs,
                and connect with like-minded individuals from around the world.
                Users can browse, search and favorite recipes, organize their
                week with our meal planner, send, accept and reject friend
                requests, join groups, and chat with other online users.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                isAccordionOpen("collapseFour") ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleAccordionClick("collapseFour")}
            >
              Spiffy Stickies
            </button>
          </h2>
          <div
            id="collapseFour"
            className={`accordion-collapse collapse ${
              isAccordionOpen("collapseFour") ? "show" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col">
                  <a href="https://spiffy-stickies.onrender.com/#/">
                    Deployed Site
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/sarah-goewey/stackathon">
                    GitHub
                  </a>
                </div>
              </div>
              <br />
              <div className="row">
                Completed during my tenure at Fullstack Academy, Spiffy Stickies
                is a full-stack CRUD app that is intended for use both in
                writing personal notes-to-self and in sharing public notes with
                all users. Users are able to choose the color and font of their
                sticky notes, and even add a little emoji to their note's title.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
