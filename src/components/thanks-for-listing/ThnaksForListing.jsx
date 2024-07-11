import React from "react";
import "./ThnaksForListing.css";
import { Link } from "react-router-dom";

const ThnaksForListing = () => {
  return (
    <div className="listing-component d-flex justify-content-center">
      <div className="listing-content d-flex flex-column gap-4">
        <h4>Thank you for listing your property with us,</h4>
        <h5>Your listing will be reviewed and will go live within 24 hours.</h5>
        <h6>
          We will now manage your listing and get in touch with you after
          finding the best suitable tenant as per your preference.
        </h6>
        <p style={{ color: "#000" }}>-Dylan Estates</p>
        <p></p>
        <div className="edit-or-preview-btns d-flex align-items-center gap-5">
          <button
            style={{
              color: "#fff",
              background: "#122b49",
              padding: "6px 20x",
              fontWeight: "400",
            }}
            className="btn"
          >
            Edit Property Listing
          </button>
          <Link to={"/preview"}>
            <button
              style={{
                color: "#fff",
                background: "#122b49",
                padding: "6px 20x",
                fontWeight: "400",
              }}
              className="btn"
            >
              Preview Property Listing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThnaksForListing;
