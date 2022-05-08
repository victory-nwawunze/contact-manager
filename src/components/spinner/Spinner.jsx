/** @format */

import React from "react";
import spinnerImg from "../../../src/assets/image/Loading_icon.gif";
let Spinner = () => {
  return (
    <React.Fragment>
      <div>
        <img
          src={spinnerImg}
          className="d-block m-auto"
          style={{ width: "200px" }}
        />
      </div>
    </React.Fragment>
  );
};
export default Spinner;
