import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <>
      <div className="newsLetter">
        <h3>Subscribe for new features</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique
          voluptate quaerat vero neque perspiciatis.
        </p>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
