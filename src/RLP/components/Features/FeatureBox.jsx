/* eslint-disable react/prop-types */
import React from "react";

const FeatureBox = ({ feat }) => {
  return (
    <>
      <div className="box">
        <img src={feat.photo} alt="" />
        <h3>{feat.title}</h3>
        <p>{feat.desc}</p>
        <button className="btn">read more</button>
      </div>
    </>
  );
};

export default FeatureBox;
