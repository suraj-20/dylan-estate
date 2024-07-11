import React from "react";

const PropertyDetailsForm = () => {
  return (
    <form className="d-flex flex-column gap-5">
      <div className="content-container">
        <label for="propertyfor" class="form-label">
          Property For :
        </label>
        <div className="form-text d-flex">
          <div className="form-check form-check-in-property-detail d-flex align-items-center  gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="propertyfor"
              id="Rent"
            />
            <label class="form-check-label" for="Rent">
              Rent
            </label>
          </div>
          <div className="form-check form-check-in-property-detail d-flex align-items-center gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="propertyfor"
              id="Sale"
              checked
            />
            <label class="form-check-label" for="Sale">
              Sale
            </label>
          </div>
        </div>
      </div>
      <div className="content-container">
        <label for="propertytype" class="form-label">
          Property Type :
        </label>
        <div className="form-text d-flex">
          <div className="form-check form-check-in-property-detail d-flex align-items-center  gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="propertytype"
              id="Residentail"
            />
            <label class="form-check-label" for="Residentail">
              Residentail
            </label>
          </div>
          <div className="form-check form-check-in-property-detail d-flex align-items-center gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="propertytype"
              id="Commercial"
              checked
            />
            <label class="form-check-label" for="Commercial">
              Commercial
            </label>
          </div>
          <div className="form-check form-check-in-property-detail d-flex align-items-center gap-4">
            <input
              class="form-check-input"
              type="radio"
              name="propertytype"
              id="Land / Plot"
              checked
            />
            <label class="form-check-label" for="Land / Plot">
              Land / Plot
            </label>
          </div>
        </div>
      </div>
      <div className="area-content-container d-flex justify-content-between gap-5">
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Build up Area :
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="580"
          />
        </div>
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Carpet Area :
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="580"
          />
        </div>
      </div>
      <div className="area-content-container d-flex justify-content-between gap-5">
        <div className="floor-detail-container d-flex gap-4 w-50">
          <div className="content-container w-50">
            <label for="exampleInputPassword1" class="form-label">
              Build up Area :
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="580"
            />
          </div>
          <div className="content-container w-50">
            <label for="exampleInputPassword1" class="form-label">
              Build up Area :
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="580"
            />
          </div>
        </div>
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Carpet Area :
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="580"
          />
        </div>
      </div>
      <div className="content-container">
        <label for="propertyfor" class="form-label">
          Property For :
        </label>
        <textarea
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          rows={5}
          placeholder="Add a description for your property to attraact the best tanant"
        />
      </div>
    </form>
  );
};

export default PropertyDetailsForm;
