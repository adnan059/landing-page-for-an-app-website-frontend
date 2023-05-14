import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="box-container">
          <div className="box">
            <h3>About us</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              consequatur pariatur recusandae.
            </p>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#home">home</a>
            <a href="#features">features</a>
            <a href="#about">about</a>
            <a href="#review">review</a>
            <a href="#pricing">pricing</a>
            <a href="#contact">contact</a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="https://www.facebook.com" rel="noreferrer">
              facebook
            </a>
            <a href="https://www.twiiter.com" rel="noreferrer">
              twiiter
            </a>
            <a href="https://www.linkedin.com" rel="noreferrer">
              linkedin
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>

            <div className="info">
              <i className="fas fa-phone"></i>
              <p>+0123-XXX-856</p>
            </div>

            <div className="info">
              <i className="fas fa-envelope"></i>
              <p>example@ymail.com</p>
            </div>

            <div className="info">
              <i className="fas fa-map-marker-alt"></i>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          <h1 className="credit"> &copy; copyright @2023 by Md Adnan Faruk</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
