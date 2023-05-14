import React from "react";
import { featureData } from "../../dummyData";
import FeatureBox from "./FeatureBox";
import "./Features.css";

const Features = () => {
  return (
    <section className="features" id="features">
      <h1 className="heading">app features</h1>
      <div className="box-container">
        {featureData.map((feat, i) => (
          <FeatureBox key={i} feat={feat} />
        ))}
      </div>
    </section>
  );
};

export default Features;
