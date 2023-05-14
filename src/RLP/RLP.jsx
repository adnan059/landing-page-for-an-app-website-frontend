import React from "react";
import "./RLP.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Pricing from "./components/Pricing/Pricing";
import Review from "./components/Review/Review";

const RLP = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <About />
      <NewsLetter />
      <Review />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default RLP;
