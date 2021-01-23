import React from "react";
import styled from "styled-components";

import ShapeContext from "../context";

import EInput from "./input-components/ellipse-input";
import RInput from "./input-components/rectangle-input";
import CircleInput from "./input-components/circle-input";
import SquareInput from "./input-components/square-input";

const FormComponent = () => {
  const { SetShape, SetDimension } = React.useContext(ShapeContext);
  let savedShapeValue = localStorage.getItem("lastShape");
  const [formValue, setValue] = React.useState(savedShapeValue);
  const [formValid, setFormValid] = React.useState(false);
  
  
  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem("lastShape", formValue);
    if (e.target.value!=="") {
      setFormValid(true);
    }
   
    
  };
  const handleSubmit = () => {
    SetShape(formValue);
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    const dimensionArray = [];

    if (y === 0) {
      dimensionArray.push(x);
      localStorage.setItem("savedDimensions", JSON.stringify(dimensionArray));

      const savedDimensionsArray = JSON.parse(
        localStorage.getItem("savedDimensions")
      );

      const [saved_xvalue] = savedDimensionsArray;

      SetDimension(saved_xvalue);
    } else {
      dimensionArray.push(x, y);
      localStorage.setItem("savedDimensions", JSON.stringify(dimensionArray));

      const savedDimensionsArray = JSON.parse(
        localStorage.getItem("savedDimensions")
      );
      const [saved_xvalue, saved_yvalue] = savedDimensionsArray;
       
      SetDimension(saved_xvalue, saved_yvalue);
    }
  };
  return (
    <Mysection>
      {savedShapeValue ? <h5>lastShape = {savedShapeValue}</h5> : ""}
      <form onChange={handleChange}>
        <label htmlFor="shapes">Select a shape:</label>
        <select
          id="shapes"
          name="shapes"
          defaultValue={formValue ? formValue : ""}
        >
          <option value="">pick a shape </option>
          <option value={formValue !== "ellipse" ? "ellipse" : formValue}>
            {formValue !== "ellipse" ? "ellipse" : formValue}
          </option>
          <option value={formValue !== "circle" ? "circle" : formValue}>
            {formValue !== "circle" ? "circle" : formValue}
          </option>
          <option value={"rectangle"}>
            {formValue !== "rectangle" ? "rectangle" : formValue}
          </option>
          <option value={"square"}>
            {" "}
            {formValue !== "square" ? "square" : formValue}
          </option>
        </select>
      </form>{" "}
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {formValue === "circle" ? (
          <CircleInput />
        ) : formValue === "ellipse" ? (
          <EInput />
        ) : formValue === "rectangle" ? (
          <RInput />
        ) : formValue === "square" ? (
          <SquareInput />
        ) : null}
        <br />
       
          <input
          type="submit"
          value="Create shape"
          onClick={formValid
          ? 
             handleSubmit : null }
          className="btn"
        />
        
      </form>
    </Mysection>
  );
};

const Mysection = styled.section`
  width: 37%;
  padding: 2em 0em 0em 0.5em;
  background-color: rgb(221, 217, 217);
  color: black;
  #shapes {
    margin-top: 0.3em;
    width: 80%;
    font-size: large;
    text-align: center;
    padding-left: 1em;
  }
  .inputbox {
    width: 90%;
  }
  .input {
    margin-top: 3em;
  }
  .btn {
    padding: 1em 0.5em 1em 0.5em;
    font-size: small;
    letter-spacing: 0.1em;
    margin-top: 1em;
  }
  form label {
    margin-top: 2em;
  }
`;

export default FormComponent;
