import React from "react";

const CircleShape = (radius) => {
  const [r] = radius.dimension;
  if (r < 101 && r > 49) {
    return (
      <>
        <circle cx="110" cy="150" r={`${r}`} fill="black" />
      </>
    );
  } else {
    return (
      <>
        <text x="5" y="120" style={{ fill: "red" }}>
          <tspan x="5" y="150">
            {" "}
            Radius must be{" "}
          </tspan>
          <tspan x="5" y="170">
            {" "}
            less than 101{" "}
          </tspan>
          <tspan x="5" y="190">
            {" "}
            and greater
          </tspan>
          <tspan x="5" y="210">
            {" "}
            than 49{" "}
          </tspan>
        </text>
      </>
    );
  }
};

export default CircleShape;
