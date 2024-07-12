import React from "react";

const OwnerBuilderForm = () => {
  return (
    <form className="d-flex flex-column gap-4">
      <div className="content-container">
        <label for="exampleInputEmail1" class="form-label">
          I am :
        </label>
        <div className="form-text d-flex gap-4">
          <div className="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Owner
            </label>
          </div>
          <div className="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Builder
            </label>
          </div>
        </div>
      </div>
      <div className="content-container">
        <label for="exampleInputPassword1" class="form-label">
          Your Name :
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Name"
          required
        />
      </div>
      <div className="content-container">
        <label for="exampleInputPassword1" class="form-label">
          Country :
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>India</option>
          <option value="1">India</option>
          <option value="2">China</option>
          <option value="3">America</option>
        </select>
      </div>
      <div className="phone-or-email d-flex flex-column gap-3">
        <div className="content-container">
          <label for="exampleInputPassword1" class="form-label">
            Phone :
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="99999-99999"
            required
          />
        </div>
        <div className="or">OR</div>
        <div className="content-container">
          <label for="exampleInputPassword1" class="form-label">
            Email :
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="JohnDoe@gmail.com"
          />
        </div>
      </div>
    </form>
  );
};

export default OwnerBuilderForm;
