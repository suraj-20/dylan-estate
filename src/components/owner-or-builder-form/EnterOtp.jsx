import React from "react";

const EnterOtp = () => {
  return (
    <form className="d-flex flex-column gap-4">
      <div className="content-container">
        <div className="content-container d-flex flex-column gap-3">
          <label for="exampleInputPassword1" class="form-label">
            Enter OTP sent on 99999-99999
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="0 0 0 0"
          />
        </div>
      </div>
    </form>
  );
};

export default EnterOtp;
