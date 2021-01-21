import React from "react";

import { ShapeProvider } from "./context";

import "./App.css";

import FormComponent from "./components/form-component";
import ShapeComponent from "./components/shape-component";
import Footer from "./components/footer";

function App() {
  const [shape, setShape] = React.useState(localStorage.getItem("lastShape"));
  const [dimension, setDimension] = React.useState(
    JSON.parse(localStorage.getItem("savedDimensions"))
  );
  const SetShape = (shapeinput) => {
    setShape(shapeinput);
  };
  const SetDimension = (x, y) => {
    let dArray = [];
    dArray.push(x, y);
    setDimension(dArray);
  };
  return (
    <React.Fragment>
      <h1 className="header">Shape Generator</h1>
      <div className="body">
        <ShapeProvider value={{ shape, dimension, SetShape, SetDimension }}>
          <FormComponent />
          <ShapeComponent />
        </ShapeProvider>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
