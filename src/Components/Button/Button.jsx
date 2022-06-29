import React from "react";
import "./Button.css";

function Button(props) {
  const { className, children } = props;
  return <button className={`button ${className}`}>{children}</button>;
}

export default Button;
