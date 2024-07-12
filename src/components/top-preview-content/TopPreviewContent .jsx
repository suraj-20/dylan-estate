import React from "react";
import image1 from "../../assets/Frame 292.png";
import image2 from "../../assets/Frame 4.png";
import image3 from "../../assets/Group 33405.png";
import image4 from "../../assets/Frame (1).png";
import frame1 from "../../assets/Frame 292 (1).png";
import frame2 from "../../assets/Frame 292 (2).png";
import frame3 from "../../assets/Frame 292 (3).png";
import frame4 from "../../assets/Frame 292 (4).png";
import frame5 from "../../assets/Frame 292 (5).png";
import frame6 from "../../assets/Frame 292.jpg";

const TopPreviewContent = () => {
  return (
    <div className="top-preview-content d-flex gap-5">
      <div className="left-preview-content d-flex flex-column gap-5">
        <div className="top-left-content d-flex flex-column gap-2">
          <div className="property-name-or-icons d-flex gap-3">
            <div className="property-name-or-location">
              <h3>
                1 BHK Flat / Apartment For Rent in Gokul Village Chs 2 (545
                Sq.ft.){" "}
              </h3>
              <p>
                Gokul village chs 2 Shanti Park, near st. Xaviours High school
              </p>
            </div>
            <div className="like-or-share-icons"></div>
          </div>
          <div className="picture-position">
            <div
              style={{ height: "100%" }}
              className="add-image-container d-flex align-items-center justify-content-center flex-column gap-3"
            >
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
            <div className="previous-picture-btn">
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="next-picture-btn">
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="picture-footer-content"></div>
          </div>
        </div>
        <div className="property-overview-content d-flex flex-column gap-2">
          <h3>Property Overview</h3>
          <div className="property-overview-container d-grid">
            <div className="overview-content-container d-flex gap-2">
              <div className="icon">
                <img src={frame6} alt="" />
              </div>
              <div className="contents d-flex flex-column ">
                <span style={{ color: "#122b49", fontWeight: "500" }}>
                  Two (2)
                </span>
                <span style={{ color: "#7a7a7a", fontWeight: "500" }}>
                  Badroom
                </span>
              </div>
            </div>
            <div className="overview-content-container d-flex gap-2">
              <div className="icon">
                <img src={frame2} alt="" />
              </div>
              <div className="contents d-flex flex-column ">
                <span style={{ color: "#122b49", fontWeight: "500" }}>
                  East
                </span>
                <span style={{ color: "#7a7a7a", fontWeight: "500" }}>
                  Facing
                </span>
              </div>
            </div>
            <div className="overview-content-container d-flex gap-2">
              <div className="icon">
                <img src={frame3} alt="" />
              </div>
              <div className="contents d-flex flex-column ">
                <span style={{ color: "#122b49", fontWeight: "500" }}>Yes</span>
                <span style={{ color: "#7a7a7a", fontWeight: "500" }}>
                  Pets Allowed
                </span>
              </div>
            </div>
            <div className="overview-content-container d-flex gap-2">
              <div className="icon">
                <img src={frame4} alt="" />
              </div>
              <div className="contents d-flex flex-column ">
                <span style={{ color: "#122b49", fontWeight: "500" }}>
                  Two (2)
                </span>
                <span style={{ color: "#7a7a7a", fontWeight: "500" }}>
                  Badroom
                </span>
              </div>
            </div>
            <div className="overview-content-container d-flex gap-2">
              <div className="icon">
                <img src={frame5} alt="" />
              </div>
              <div className="contents d-flex flex-column ">
                <span style={{ color: "#122b49", fontWeight: "500" }}>
                  Semi Furnished
                </span>
                <span style={{ color: "#7a7a7a", fontWeight: "500" }}>
                  Furnishing
                </span>
              </div>
            </div>
            <div className="overview-content-container d-flex gap-2">
              <div className="icon">
                <img src={frame1} alt="" />
              </div>
              <div className="contents d-flex flex-column ">
                <span style={{ color: "#122b49", fontWeight: "500" }}>4</span>
                <span style={{ color: "#7a7a7a", fontWeight: "500" }}>
                  Total Floors
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="property-emenities-content d-flex flex-column gap-4">
          <h3>Amenities</h3>
          <div className="checkbox-container d-flex justify-content-between">
            <div className="check-box-container d-flex flex-column justify-centent-center align-items-center gap-3">
              <img src={image1} alt="" />
              <label for="Security"> 24/7 Security</label>
            </div>
            <div className="check-box-container d-flex flex-column justify-centent-center align-items-center gap-3">
              <img src={image3} alt="" />
              <label for="Lift"> Lift</label>
            </div>
            <div className="check-box-container d-flex flex-column justify-centent-center align-items-center gap-3">
              <img src={image2} alt="" />
              <label for="Camera"> CCTV Camera</label>
            </div>
            <div className="check-box-container d-flex flex-column justify-centent-center align-items-center gap-3">
              <img src={image4} alt="" />
              <label for="Sport"> Sport</label>
            </div>
          </div>
        </div>
        <div className="property-description-content d-flex flex-column gap-2">
          <h3>Description</h3>
          <div className="description-content">
            <p>
              Spread over 510 sqft. this home is an ideal place to live in.
              Access to bus station & medical stores is very easy & convenient
              from this house. If you are a frequent traveller, then you'll be
              happy to note that train station is less than 10 minutes from this
              house. With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close
              by, you can catch your favourite movies running & never worry
              about missing a show because of traffic. Never miss out on
              lifestyle as Rassaz Mall......
            </p>
            <a href="/">Show more</a>
          </div>
        </div>
      </div>
      <div className="right-preview-content d-flex flex-column gap-4">
        <div className="price-details d-flex text-center">
          <div className="monthly-fare">
            <h4>₹ 20,000 / Month</h4>
            <p>(Rent-Negotiable)</p>
          </div>
          <div className="deposite-fare">
            <h4>₹ 20,000</h4>
            <p>(Deposite)</p>
          </div>
        </div>
        <div className="inquiry-form d-flex flex-column gap-3">
          <div className="inquiry-form-heading">
            <h6>Send an Inquiry for this property?</h6>
            <p>Contact Person : Melvin Lasrado</p>
          </div>
          <form action="" className="d-flex flex-column gap-3">
            <div className="input-field">
              <input
                type="text"
                name=""
                id=""
                className="form-input-field"
                placeholder="Name"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name=""
                id=""
                className="form-input-field"
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <input
                type="phone"
                name=""
                id=""
                className="form-input-field"
                placeholder="99999-99999"
              />
            </div>
            <div className="like-more-info">
              <p>
                I would like more information about Sector 5, shanti nagar,
                anubhav society
              </p>
            </div>
            <button
              style={{
                color: "#fff",
                background: "#122b49",
                padding: "6px 20x",
                fontWeight: "500",
              }}
              className="send-btn btn"
            >
              SEND INQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TopPreviewContent;
