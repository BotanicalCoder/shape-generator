import React from "react";

const EllipseShape = (dimension) => {
  const [x, y] = dimension.dimension;

  if (x < 101 && x > 49 && y < 50 && y > 24) {
    return (
      <>
        <ellipse cx="120" cy="150" rx={`${x}`} ry={`${y}`} />
      </>
    );
  } else {
    return (
      <>
        <text x="5" y="120" style={{ fill: "red" }}>
          <tspan x="5" y="140">
            {" "}
            xradius must be{" "}
          </tspan>
          <tspan x="5" y="160">
            {" "}
            less than 101{" "}
          </tspan>
          <tspan x="5" y="180">
            and greater
          </tspan>
          <tspan x="5" y="200">
            than 50
          </tspan>
        </text>
        <text x="10" y="220" style={{ fill: "red" }}>
          <tspan x="5" y="240">
            {" "}
            yradius must be{" "}
          </tspan>
          <tspan x="5" y="260">
            less than 50{" "}
          </tspan>
          <tspan x="5" y="280">
            {" "}
            and greater 
          </tspan>
          <tspan x="5" y="300">
            {" "}
            than 25
          </tspan>
        </text>
      </>
    );
  }
};

export default EllipseShape;
