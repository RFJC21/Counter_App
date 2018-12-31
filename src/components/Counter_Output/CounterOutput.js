import React from "react";
import classes from "./CounterOutput.css";

const counterOutput = props => (
  <div className={classes.CounterOutput}>
    {" "}
    Current Counter: <strong>{props.value}</strong>{" "}
  </div>
);

export default counterOutput;
