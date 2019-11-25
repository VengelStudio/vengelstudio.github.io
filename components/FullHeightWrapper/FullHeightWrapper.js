import React from "react";
import "./FullHeightWrapper.scss";

const FullHeightWrapper = props => {
  return <div className="full-height">{props.children}</div>;
};

export default FullHeightWrapper;
