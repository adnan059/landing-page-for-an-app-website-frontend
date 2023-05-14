import React from "react";
import contactPic from "../../assets/contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="image">
          <img src={contactPic} alt="" />
        </div>

        <form>
          <h1 className="heading">Contact us</h1>

          <div className="inputBox">
            <input type="text" />
            <label>name</label>
          </div>

          <div className="inputBox">
            <input type="email" />
            <label>email</label>
          </div>

          <div className="inputBox">
            <input type="tel" />
            <label>phone</label>
          </div>

          <div className="inputBox">
            <textarea cols={"30"} rows={"10"}></textarea>
            <label>message</label>
          </div>

          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </>
  );
};

export default Contact;
