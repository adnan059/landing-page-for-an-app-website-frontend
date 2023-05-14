import React from "react";
import about from "../../assets/about.png";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">about the app</h1>

        <div className="column">
          <div className="image">
            <img src={about} alt="" />
          </div>

          <div className="content">
            <h3>Easy and perfect solution for your business app</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto, explicabo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi
              omnis quaerat repellat quis laboriosam laborum necessitatibus cum
              labore rerum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Provident, rerum.
            </p>

            <div className="buttons">
              <a href="#" className="btn">
                <i className="fab fa-apple"></i>
                app store
              </a>
              <a href="#" className="btn">
                <i className="fab fa-google-play"></i>app store
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
