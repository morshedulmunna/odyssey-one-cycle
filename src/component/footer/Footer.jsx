import React from "react";
import "./Footer.css";
import logo from "../../asset/logo.png";
import {
  TiSocialTwitter,
  TiSocialVimeo,
  TiSocialLinkedin,
  TiSocialFacebook,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className=" container footer_wrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="customer">
            <p>Buyer</p>
            <p>Supplier</p>
          </div>
          <div className="company">
            <p>About us</p>
            <p>All Products</p>
            <p>Contact Us</p>
          </div>
          <div className="info">
            <p>Tearm & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="follow">
            <h3>Follow Us</h3>
            <span>
              <TiSocialTwitter />
              <TiSocialVimeo />
              <TiSocialLinkedin />
              <TiSocialFacebook />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
