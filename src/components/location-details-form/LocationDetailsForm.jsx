import React from "react";

const LocationDetailsForm = () => {
  return (
    <form className="d-flex flex-column gap-5">
      <div className="area-content-container d-flex justify-content-between gap-5">
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Building Society Name :
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>India</option>
            <option value="1">India</option>
            <option value="2">China</option>
            <option value="3">America</option>
          </select>
        </div>
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Locality / Area :
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>India</option>
            <option value="1">India</option>
            <option value="2">China</option>
            <option value="3">America</option>
          </select>
        </div>
      </div>
      <div className="area-content-container d-flex justify-content-between gap-5">
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Landmark / Street Name :
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>India</option>
            <option value="1">India</option>
            <option value="2">China</option>
            <option value="3">America</option>
          </select>
        </div>
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            City :
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>India</option>
            <option value="1">India</option>
            <option value="2">China</option>
            <option value="3">America</option>
          </select>
        </div>
      </div>
      <div className="content-container">
        <label for="propertyfor" class="form-label">
          Mark Locality in Map
        </label>
        Putting map here
      </div>
    </form>
  );
};

export default LocationDetailsForm;
