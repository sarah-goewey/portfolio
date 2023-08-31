import React from "react";

const About = () => {
  return (
    <div className="container text-center">
      <hr />
      <h1>about</h1>
      <hr />
      <div className="row">
        <img
          src="./static/images/sarah_img.png"
          className="img-thumbnail col"
          alt="photo of sarah goewey"
          style={{ width: "25%" }}
        />
        <div className="col">
          <p>
            Hi, my name is Sarah (they/them). As a Fullstack Academy graduate
            with 5+ years of retail experience, including ecommerce fulfillment
            and receiving, I bring a unique perspective to web development that
            prioritizes user experience and streamlined functionality.
          </p>
          <p>
            {" "}
            In my ecommerce role at a bookstore, I found myself frequently
            talking customers through the same confusing parts of the store’s
            website and often wished I could go to the source and make the site
            more intuitive. When I decided it was time to make a big career
            change, a friend suggested I might enjoy learning how to code. I
            started learning on my own during small pockets of free time, then
            in the fall of 2022 I decided to take the leap and apply for
            Fullstack Academy’s part-time web development bootcamp. It’s been a
            whirlwind from there!
          </p>
          <p>
            {" "}
            Those who have worked with me would say my strengths include
            reliability, intellectual focus and an ability to work well with
            many different kinds of people. I have experience with Node,
            Javascript, React/Redux, Git, Express, HTML5, and PostgreSQL, and
            have worked independently and with teams to develop several
            full-stack projects.
          </p>
          <p>
            {" "}
            I am passionate about web development and eager to explore new
            opportunities in the book, audio, and ecommerce industries. I can’t
            wait to continue to learn and contribute my technical skills to
            creating sleek, seamless products that people love to use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
