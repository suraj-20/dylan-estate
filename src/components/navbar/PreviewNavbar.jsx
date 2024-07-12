import React from "react";
import "./Navbar.css";
import logo_image from "../../assets/LOGO.png";
import logo1 from "../../assets/Frame2.png";
import logo2 from "../../assets/Frame.png";
import { Link } from "react-router-dom";

const PreviewNavbar = () => {
  return (
    <div className="navbar py-1">
      <div className="nav-container d-flex justify-content-between">
        <div className="nav-logo d-flex align-items-center">
          <Link to={"/"}>
            <img src={logo_image} alt="logo" width={100} />
          </Link>
        </div>
        <div className="nav-links d-flex align-items-center gap-4">
          <div className="nav-link d-flex align-items-center justify-content-center gap-4">
            <a href="/">ALL PROPERTIES</a>
            <a href="/">WISHLIST</a>
            <a href="/">SAVED SEARCH</a>
            <a href="/">LIST YOUR PROPERTY</a>
            <a href="/">MORE</a>
          </div>
          <div className="straing-line"></div>
          <div className="nav-profile-link d-flex align-items-center justify-content-center gap-3">
            <a href="/">
              <img src={logo1} alt="" />
            </a>
            <a href="/">
              <img src={logo2} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewNavbar;
