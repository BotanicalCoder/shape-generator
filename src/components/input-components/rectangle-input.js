import React from "react";

const RInput = () => {
  return (
    <>
      {" "}
      <label htmlFor="xradius" className="input">
        width:
      </label>
      <input type="number" id="x" min="100" max="200" required />
      <br />
      <label htmlFor="yradius" className="input">
        length:
      </label>
      <input type="number" id="y" min="50" max="90" required />{" "}
    </>
  );
};

export default RInput;
