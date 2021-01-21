import React from "react";

const ShapeContext = React.createContext({
  shape: "",
  dimension: [],
  SetShape: () => {},
  SetDimension: () => {},
});

export const ShapeProvider = ShapeContext.Provider;
export default ShapeContext;
