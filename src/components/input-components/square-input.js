import React from "react";

const SquareInput = () => {
  return (
    <>
      <label className="input">Length:</label>
      <input
        type="number"
        className="inputbox"
        id="x"
        min="100"
        max="200"
        required
      />
      <input type="number" aria-hidden hidden id="y" value="0" readOnly />
    </>
  );
};

export default SquareInput;
