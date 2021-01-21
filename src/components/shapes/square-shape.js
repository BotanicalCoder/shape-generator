import React from "react";

const SquareShape = (dimension) => {
  const [x] = dimension.dimension;

  if (x < 201 && x > 99) {
    return (
      <>
        <rect x="10" y="110" width={`${x}`} height={`${x}`} fill="black" />
      </>
    );
  } else {
    return (
      <>
        <text x="5" y="120" style={{ fill: "red" }}>
          <tspan x="5" y="150">
            {" "}
            Length must be{" "}
          </tspan>
          <tspan x="5" y="170">
            {" "}
            less than 201{" "}
          </tspan>
          <tspan x="5" y="190">
            {" "}
            and greater
          </tspan>
          <tspan x="5" y="210">
            {" "}
            than 99{" "}
          </tspan>
        </text>
      </>
    );
  }
};

export default SquareShape;
