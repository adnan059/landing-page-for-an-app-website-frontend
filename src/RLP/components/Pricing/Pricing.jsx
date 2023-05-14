import React from "react";
import { pricingData } from "../../dummyData";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <section className="pricing" id="pricing">
        <h1 className="heading">Our pricing plans</h1>
        <div className="box-container">
          {pricingData.map((pd, i) => (
            <div className="box" key={i}>
              <h3 className="title">{pd.package}</h3>
              <div className="price">
                ${pd.price} <span>/monthly</span>
              </div>
              <ul>
                <li>
                  <i className={pd.dlimiIcon}></i> 1000+ downloads
                </li>

                <li>
                  <i className={pd.transIcon}></i> No transaction fees
                </li>

                <li>
                  <i className={pd.stIcon}></i> Unlimited storage
                </li>

                <li>
                  <i className={pd.dloadIcon}></i> 5 downloads
                </li>
              </ul>

              <a href="#" className="btn">
                check out
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
