/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { reviewData } from "../../dummyData";
import "./Review.css";

const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">clients' review </h1>

        <div className="box-container">
          {reviewData.map((rv, i) => (
            <div className="box" key={i}>
              <i className="fas fa-quote-left"></i>

              <div className="user">
                <img src={rv.photo} alt="" />
                <h3>{rv.name}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="comment">{rv.comment}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
