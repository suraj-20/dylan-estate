import React from "react";
import "./Footer.css";
import logo from "../../assets/LOGO.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-footer-content d-flex justify-content-between">
        <div className="company-logo">
          <img src={logo} alt="" width={100} />
        </div>
        <div className="footer-links">
          <div className="footer-link">
            <ul>
              <a href="/">
                <li>HOME</li>
              </a>
              <a href="/">
                <li>ABOUT MIRAROAD</li>
              </a>
              <a href="/">
                <li>ABOUT US</li>
              </a>
              <a href="/">
                <li>PROPERTIES</li>
              </a>
              <a href="/">
                <li>EMI CALCULATOR</li>
              </a>
              <a href="/">
                <li>CONTACT US</li>
              </a>
              <a href="/">
                <li>LIST YOUR PROPERTY</li>
              </a>
              <a href="/">
                <li>TESTIMONIALS</li>
              </a>
              <a href="/">
                <li>FAQ'S</li>
              </a>
              <a href="/">
                <li>SAVED SEARCHES</li>
              </a>
              <a href="/">
                <li>EXPLORE NEIGHBORHOOD</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="contact-us-or-office-hours">
          <div className="contact-us">
            <h5>CONTACT US</h5>
            <p>
              B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti{" "}
            </p>
          </div>
          <div className="office-hours">
            <h5>OFFICE HOURS</h5>
            <p>
              B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="policy-or-conditions d-flex align-items-center justify-content-between">
        <div className="term-conditions">
          <p>
            © 2024 Dylan Estates. All rights reserved. Dylan Estates- Your
            Neighborhood Experts Privacy Policy | Terms & Conditions 
          </p>
        </div>
        <div className="language-or-currency d-flex align-items-center gap-3">
          <span>English</span>
          <span>INR</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
