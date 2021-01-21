import React from "react";
import styled from "styled-components";

import ShapeContext from "../context";

import RectangleShape from "./shapes/rectangle-shape";
import CircleShape from "./shapes/circle-shape";
import EllipseShape from "./shapes/ellipse-shape";
import SquareShape from "./shapes/square-shape";

const ShapeComponent = () => {
  const value = React.useContext(ShapeContext);

  return (
    <Shapesection>
      <svg >
        {value.shape === "rectangle" ? (
          <RectangleShape dimension={value.dimension} />
        ) : null}
        {value.shape === "circle" ? (
          <CircleShape dimension={value.dimension} />
        ) : null}

        {value.shape === "ellipse" ? (
          <EllipseShape dimension={value.dimension} />
        ) : null}
        {value.shape === "square" ? (
          <SquareShape dimension={value.dimension} />
        ) : null}
      </svg>
    </Shapesection>
  );
};

const Shapesection = styled.section`
  width: 62%;
  border-left: 3px solid grey;
  padding: 0em;
  color: black;
  background-color: white;
  text-align: center;
  
  svg{
    margin: 0em auto;
    padding:0em;
    width:50vw;
    height:100vh;
  }

  svg circle {
    max-width: 100%;
    
  }
`;

export default ShapeComponent;
