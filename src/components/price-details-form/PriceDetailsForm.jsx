import React from "react";

const PriceDetailsForm = () => {
  return (
    <form className="d-flex flex-column gap-5">
      <div className="area-content-container d-flex justify-content-between gap-5">
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Rent :
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
            Security :
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
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Maintenance :
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="580"
          />
        </div>
        <div className="floor-detail-container d-flex flex-column w-50">
          <label
            style={{ fontWeight: "500" }}
            for="exampleInputPassword1"
            class="form-label"
          >
            Build up Area :
          </label>
          <div className="maintenence d-flex gap-4">
            <div className="content-container w-50">
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="580"
              />
            </div>
            <div className="content-container w-50">
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="580"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <label for="propertyfor" class="form-label">
          Additional Pricing details to convey to agents?
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

export default PriceDetailsForm;
