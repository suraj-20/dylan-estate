import React from "react";
import image1 from "../../assets/Frame 292.png";
import image2 from "../../assets/Frame 4.png";
import image3 from "../../assets/Group 33405.png";
import image4 from "../../assets/Frame (1).png";

const FeaturesForm = () => {
  return (
    <form className="d-flex flex-column gap-5">
      <h3 style={{ color: "#000" }}>General Features</h3>
      <div className="content-container d-flex flex-column gap-4">
        <label for="propertyfor" class="form-label">
          Non-Veg :
        </label>
        <div className="form-text d-flex">
          <div className="form-check form-check-in-property-detail d-flex align-items-center  gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="propertyfor"
              id="Rent"
              checked
            />
            <label class="form-check-label" for="Rent">
              Allowed
            </label>
          </div>
          <div className="form-check form-check-in-property-detail d-flex align-items-center gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="propertyfor"
              id="Sale"
            />
            <label class="form-check-label" for="Sale">
              Not Allowed
            </label>
          </div>
        </div>
      </div>
      <div className="content-container d-flex flex-column gap-4">
        <label for="propertytype" class="form-label">
          Pets Allowed :
        </label>
        <div className="form-text d-flex">
          <div className="form-check form-check-in-property-detail d-flex align-items-center  gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="propertytype"
              id="Residentail"
              checked
            />
            <label class="form-check-label" for="Residentail">
              Yes
            </label>
          </div>
          <div className="form-check form-check-in-property-detail d-flex align-items-center gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="propertytype"
              id="Commercial"
            />
            <label class="form-check-label" for="Commercial">
              No
            </label>
          </div>
        </div>
      </div>
      <div className="content-container d-flex flex-column gap-4">
        <label for="electricity" class="form-label">
          Electricity :
        </label>
        <div className="form-text d-flex">
          <div className="form-check form-check-in-property-detail d-flex align-items-center  gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="electricity"
              id="Rare/No Powercut"
              checked
            />
            <label class="form-check-label" for="Rare/No Powercut">
              Rare/No Powercut
            </label>
          </div>
          <div className="form-check form-check-in-property-detail d-flex align-items-center gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="electricity"
              id=" Frequently Powercut"
            />
            <label class="form-check-label" for=" Frequently Powercut">
              Frequently Powercut
            </label>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="content-container d-flex flex-column gap-4">
        <label for="propertyfor" class="form-label">
          Furnishing:
        </label>
        <div className="checkbox-container d-flex justify-content-between">
          <div className="check-box-container d-flex gap-3">
            <input
              type="checkbox"
              id="Fully Furnished"
              name="Fully Furnished"
              value="Fully Furnished"
            />
            <label for="Fully Furnished"> Fully Furnished</label>
          </div>
          <div className="check-box-container d-flex gap-3">
            <input
              type="checkbox"
              id="Semi Furnished"
              name="Semi Furnished"
              value="Semi Furnished"
            />
            <label for="Semi Furnished"> Semi Furnished</label>
          </div>
          <div className="check-box-container d-flex gap-3">
            <input
              type="checkbox"
              id="Unfernished"
              name="Unfernished"
              value="Unfernished"
            />
            <label for="Unfernished"> Unfernished</label>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <h3 style={{ color: "#000" }}>SOCIETY EMENITIES</h3>
      <div className="content-container d-flex flex-column gap-4">
        <div className="checkbox-container d-flex justify-content-between">
          <div className="check-box-container d-flex flex-column justify-centent-center align-items-center gap-3">
            <img src={image1} alt="" />
            <label for="Security"> 24/7 Security</label>
            <input type="checkbox" id="Security" name="Security" value="Bike" />
          </div>
          <div className="check-box-container d-flex flex-column justify-centent-center align-items-center gap-3">
            <img src={image2} alt="" />
            <label for="Camera"> CCTV Camera</label>
            <input type="checkbox" id="Camera" name="Camera" value="Car" />
          </div>
          <div className="check-box-container d-flex flex-column justify-centent-center align-items-center gap-3">
            <img src={image3} alt="" />
            <label for="Lift"> Lift</label>
            <input type="checkbox" id="Lift" name="Lift" value="Boat" />
          </div>
          <div className="check-box-container d-flex flex-column justify-centent-center align-items-center gap-3">
            <img src={image4} alt="" />
            <label for="Sport"> Sport</label>
            <input type="checkbox" id="Sport" name="Sport" value="Boat" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FeaturesForm;
