import React from "react";
import "./Text.scss";

export const Text = props => {
  let text = React.createElement(
    "p",
    { className: `text text-size${props.size} text-weight-${props.weight}` },
    props.children
  );
  return <React.Fragment>{text}</React.Fragment>;
};

export default Text;
