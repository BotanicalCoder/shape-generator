import React from "react";

const RectangleShape = (dimension) => {
  const [x, y] = dimension.dimension;

  if (x < 201 && x > 99 && y < 100 && y > 49) {
    return (
      <>
        <rect x="10" y="110" width={`${x}`} height={`${y}`} fill="black" />
      </>
    );
  } else {
    return (
      <>
        <text x="5" y="30" style={{ fill: "red" }}>
          <tspan x="5" y="45">
            {" "}
            Width must be{" "}
          </tspan>
          <tspan x="5" y="69">
            {" "}
            less than 201{" "}
          </tspan>
          <tspan x="5" y="89">
            and greater
          </tspan>
          <tspan x="5" y="109">
            than 99
          </tspan>
        </text>
        <text x="10" y="130" style={{ fill: "red" }}>
          <tspan x="5" y="140">
            {" "}
            height must be{" "}
          </tspan>
          <tspan x="5" y="159">
            less than 101{" "}
          </tspan>
          <tspan x="5" y="179">
            {" "}
            and greater
          </tspan>
          <tspan x="5" y="199">
            {" "}
            than 49
          </tspan>
        </text>
      </>
    );
  }
};

export default RectangleShape;
