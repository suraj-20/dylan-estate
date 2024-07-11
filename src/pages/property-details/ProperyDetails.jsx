import React, { useState } from "react";
import "./ProperyDetails.css";
import { Link } from "react-router-dom";
import PropertyDetailsForm from "../../components/property-details-form/PropertyDetailsForm";
import LocationDetailsForm from "../../components/location-details-form/LocationDetailsForm";
import FeaturesForm from "../../components/features-form/FeaturesForm";
import PriceDetailsForm from "../../components/price-details-form/PriceDetailsForm";
import PropertyImagesForm from "../../components/property-images-from/PropertyImagesForm";
import ThnaksForListing from "../../components/thanks-for-listing/ThnaksForListing";

const ProperyDetails = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(false);

  const steps = [
    { name: "PROPERTY DETAILS", component: <PropertyDetailsForm /> },
    { name: "LOCATION DETAILS", component: <LocationDetailsForm /> },
    { name: "FEATURES & AMENITIES", component: <FeaturesForm /> },
    { name: "PRICE DETAILS", component: <PriceDetailsForm /> },
    { name: "PROPERTY IMAGES", component: <PropertyImagesForm /> },
  ];

  const handleNextClick = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowPopup(true);
    }
  };

  const handlePreviousClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  const handleContinueClick = () => {
    setShowNewComponent(true);
    setShowPopup(false);
  };

  if (showNewComponent) {
    return <ThnaksForListing />; // Render the new component
  }

  return (
    <div className="property-details-page">
      <div className="property-detail-container">
        <div className="property-detail-header d-flex">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`property-content-heading d-flex align-items-center justify-content-center ${
                currentStep === index ? "active" : ""
              }`}
              style={{
                backgroundColor:
                  currentStep === index ? "#d3d3d3" : "transparent",
              }} // Highlight the current step
            >
              <p>{step.name}</p>
            </div>
          ))}
        </div>
        <div className="progress-line">
          <div
            className="progress-bar"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              backgroundColor: "#122b49",
            }}
          ></div>
        </div>
        <div className="property-details-form overflow-scroll">
          {steps[currentStep].component}
        </div>
        <div className="property-detail-footer d-flex align-items-center justify-content-between">
          <p style={{ margin: "0" }}>
            Need Help? <span>Call 9999999999</span>
          </p>
          <div className="d-flex align-items-center justify-content-center">
            {currentStep > 0 && (
              <button
                style={{
                  color: "#fff",
                  border: "1px solid #fff",
                  padding: "4px 30px",
                  fontWeight: "500",
                  marginRight: "10px",
                }}
                className="btn d-flex align-items-center justify-content-center"
                onClick={handlePreviousClick}
              >
                Previous
              </button>
            )}
            <button
              style={{
                color: "#fff",
                border: "1px solid #fff",
                padding: "4px 30px",
                fontWeight: "500",
              }}
              className="btn d-flex align-items-center justify-content-center"
              onClick={handleNextClick}
            >
              {currentStep === steps.length - 1 ? "Save and Post" : "Next"}
            </button>
          </div>
        </div>
        {showPopup && (
          <div className="popup d-flex flex-column">
            <div className="popup-content d-flex flex-column align-items-center gap-4">
              <p style={{ color: "#000" }}>POST PROPERTY ON DYLAN ESTATE?</p>
              <div className="button-and-terms d-flex flex-column gap-3 align-items-center">
                <button
                  style={{
                    color: "#fff",
                    background: "#122b49",
                    padding: "6px 20x",
                    fontWeight: "400",
                  }}
                  className="btn d-flex align-items-center justify-content-center"
                  onClick={handleContinueClick}
                >
                  Continue
                </button>
                <p style={{ color: "#000" }} className="text-center">
                  By continuing you agree to our{" "}
                  <a href="/" style={{ textDecoration: "underline" }}>
                    <span>Terms and Conditions & Privacy Policy</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProperyDetails;

// const steps = [
//   { name: "PROPERTY DETAILS", component: <PropertyDetailsForm /> },
//   { name: "LOCATION DETAILS", component: <LocationDetailsForm /> },
//   { name: "FEATURES & AMENITIES", component: <FeaturesForm /> },
//   { name: "PRICE DETAILS", component: <PriceDetailsForm /> },
//   { name: "PROPERTY IMAGES", component: <PropertyImagesForm /> },
// ];
