import React from "react";

const EInput = () => {
  return (
    <>
      {" "}
      <label htmlFor="xradius" className="input">
        x-radius
      </label>
      <input type="number" id="x" min="50" max="100" required />
      <br /> <br/>
      <label htmlFor="yradius" className="input">
        y-radius
      </label>
      <input type="number" id="y" min="25" max="49" required />{" "}
    </>
  );
};

export default EInput;
