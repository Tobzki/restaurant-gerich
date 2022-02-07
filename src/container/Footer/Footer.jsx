import React from "react";
import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
const Footer = () => {
  return (
    <div className="app__footer">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Rötjutvägen 26 27543 Rölö</p>
          <p className="p__opensans">+46 3242342334432</p>
          <p className="p__opensans">+46 3242342334432</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="gericht" />
          <p className="p__opensans">
            "The best way to find yourself is to loose yourself in the service
            of others.
          </p>
          <img src={images.spoon} alt="spoon" style={{ marginTop: "15px" }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans"> 07:00 am - 11:00 pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2021 Tobizki. All Rights are reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
