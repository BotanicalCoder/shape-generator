import React from "react";

const CircleInput = () => {
  return (
    <>
      <label className="input">Radius:</label>
      <input
        type="number"
        className="inputbox"
        id="x"
        min="50"
        max="100"
        required
      />
      <input type="number" aria-hidden hidden id="y" value="0" readOnly />
    </>
  );
};

export default CircleInput;
