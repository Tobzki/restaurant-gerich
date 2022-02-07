import React from "react";

import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to our newsletter</h1>
        <p className="p__opensans">Never miss a thing</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button className="custom__button">Lolz</button>
      </div>
    </div>
  );
};

export default Newsletter;
