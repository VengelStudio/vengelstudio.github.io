import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

export const Button = props => {
  let Button = React.createElement(
    "button",
    { className: `button button-size${props.size} button-type-${props.type}` },
    props.children
  );
  return <React.Fragment>{Button}</React.Fragment>;
};
Button.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string
};
Button.defaultProps = {
  size: 4,
  type: "default"
};

export default Button;
