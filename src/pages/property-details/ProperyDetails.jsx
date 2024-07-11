import React from "react";
import "./ProperyDetails.css";
import { Link } from "react-router-dom";
import PropertyDetailsForm from "../../components/property-details-form/PropertyDetailsForm";
import LocationDetailsForm from "../../components/location-details-form/LocationDetailsForm";
import FeaturesForm from "../../components/features-form/FeaturesForm";
import PriceDetailsForm from "../../components/price-details-form/PriceDetailsForm";

const ProperyDetails = () => {
  return (
    <div className="property-details-page">
      <div className="property-detail-container">
        <div className="property-detail-header d-flex ">
          <div className="property-content-heading d-flex align-items-center justify-content-center">
            <p>PROPERTY DETAILS</p>
          </div>
          <div className="property-content-heading d-flex align-items-center justify-content-center">
            <p>LOCATION DETAILS</p>
          </div>
          <div className="property-content-heading d-flex align-items-center justify-content-center">
            <p>FEATURES & AMENITIES</p>
          </div>
          <div className="property-content-heading d-flex align-items-center justify-content-center">
            <p>PRICE DETAILS</p>
          </div>
          <div className="property-content-heading d-flex align-items-center justify-content-center">
            <p>PROPERTY IMAGES</p>
          </div>
        </div>
        <div className="progress-line"></div>
        <div className="property-details-form overflow-scroll">
          {/* <PropertyDetailsForm /> */}
          {/* <LocationDetailsForm /> */}
          {/* <FeaturesForm /> */}
          <PriceDetailsForm />
        </div>
        <div className="property-detail-footer d-flex align-items-center justify-content-between">
          <p style={{ margin: "0" }}>
            Need Help? <span>Call 9999999999</span>
          </p>
          <Link to={"/property-detail"}>
            <button
              style={{
                background: "#fff",
                padding: "4px 30px",
                fontWeight: "500",
              }}
              className="btn d-flex align-items-center justify-content-center"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProperyDetails;
