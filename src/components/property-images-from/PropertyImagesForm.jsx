import React from "react";
import "./PropertyImagesForm.css";

const PropertyImagesForm = () => {
  return (
    <form className="d-flex flex-column gap-4">
      <div className="property-image-heading">
        <h4 style={{ color: "#000" }}>
          Add Photos / videos to attract more tenants!{" "}
        </h4>
      </div>
      <div className="property-image-content d-flex flex-column gap-3">
        <h4 style={{ color: "#000" }}>
          Add Photos of living room, bedroom, bathroom, floor, doors, kitchen,
          balcony, location map, neighborhood, etc
        </h4>
        <div className="add-image-container d-flex align-items-center justify-content-center flex-column gap-3">
          <i className="fa-solid fa-camera"></i>
          <button
            style={{
              color: "#fff",
              background: "#122b49",
              padding: "6px 20x",
              fontWeight: "400",
            }}
            className="btn d-flex align-items-center justify-content-center gap-2"
          >
            <i
              style={{ color: "#fff", fontSize: "1rem" }}
              className="fa-solid fa-plus"
            ></i>{" "}
            Add Photos Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default PropertyImagesForm;
