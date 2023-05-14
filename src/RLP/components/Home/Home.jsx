import React from "react";
import phone from "../../assets/phone.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            best mobile app <span>showcase</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            veritatis accusantium molestias pariatur dolores nam beatae dolor
            quibusdam alias ea.
          </p>
          <a href="#" className="btn">
            download now
          </a>
        </div>

        <div className="image">
          <img src={phone} alt="phone" />
        </div>
      </section>
    </>
  );
};

export default Home;
