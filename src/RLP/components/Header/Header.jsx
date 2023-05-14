import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <>
      <header>
        <a href="#" className="logo">
          <span>best</span>App
        </a>

        <label
          className={isClicked ? "fas fa-times" : "fas fa-bars"}
          onClick={handleClick}
        ></label>

        <nav className={`navbar ${isClicked ? "clicked" : null}`}>
          <a href="#home" onClick={handleClick}>
            home
          </a>
          <a href="#features" onClick={handleClick}>
            features
          </a>
          <a href="#about" onClick={handleClick}>
            about
          </a>
          <a href="#review" onClick={handleClick}>
            review
          </a>
          <a href="#pricing" onClick={handleClick}>
            pricing
          </a>
          <a href="#contact" onClick={handleClick}>
            contact
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
