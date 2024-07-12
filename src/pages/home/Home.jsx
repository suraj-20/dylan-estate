import React, { useState } from "react";
import "./Home.css";
import right_tick from "../../assets/image 29.png";
import OwnerBuilderForm from "../../components/owner-or-builder-form/OwnerBuilderForm";
import { Link } from "react-router-dom";
import EnterOtp from "../../components/owner-or-builder-form/EnterOtp";

const Home = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="home-section">
      <div className="heading-contents">
        <div className="header-heading d-flex flex-column gap-3">
          <h2>Sell or Rent your Property For Free</h2>
          <p>
            Whether you’re ready to sell or looking for answers, we’ll guide you
            with data and expertise specific to your needs.
          </p>
        </div>
      </div>
      <div className="bottom-contents d-flex align-items-center justify-content-between">
        <div
          style={{ color: "#fff" }}
          className="left-contents py-3 d-flex flex-column gap-2"
        >
          <div className="left-content-heading">
            <h4>Upload your property in 4 simple steps</h4>
          </div>
          <div className="left-content d-flex flex-column gap-1">
            <p>
              <img src={right_tick} alt="" />{" "}
              <span>Add your properties Basic Details</span>
            </p>
            <p>
              <img src={right_tick} alt="" /> <span>Add property Location</span>
            </p>
            <p>
              <img src={right_tick} alt="" />{" "}
              <span>Add property Features and amenities</span>
            </p>
            <p>
              <img src={right_tick} alt="" /> <span>Add Price details</span>
            </p>
            <p>
              <img src={right_tick} alt="" />{" "}
              <span>Add your best Property Shots</span>
            </p>
          </div>
        </div>
        <div className="right-content">
          <div className="right-content-container">
            <div className="right-content-header d-flex align-items-center">
              <h3>LETS GET YOU STARTED !</h3>
            </div>
            <div className="right-content-form p-4 overflow-scroll">
              {step === 1 && <OwnerBuilderForm />}
              {step === 2 && <EnterOtp />}
            </div>
            <div className="right-content-footer d-flex align-items-center">
              <p>
                Need Help? <span>Call 9999999999</span>
              </p>
              {step < 2 ? (
                <button
                  className="btn d-flex align-items-center justify-content-center"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </button>
              ) : (
                <Link to="/property-detail">
                  <button className="btn d-flex align-items-center justify-content-center">
                    Next
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
