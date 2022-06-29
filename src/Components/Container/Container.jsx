import React from "react";
import "./Container.css";

function Container(props) {
  const { className, children } = props;
  return <div className={`container ${className}`}>{children}</div>;
}

export default Container;
