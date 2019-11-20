import React from "react";
import "./Text.scss";
import PropTypes from "prop-types";

export const Text = props => {
  let text = React.createElement(
    "p",
    { className: `text text-size${props.size} text-weight-${props.weight}` },
    props.children
  );
  return <React.Fragment>{text}</React.Fragment>;
};
Text.propTypes = {
  size: PropTypes.number,
  weight: PropTypes.number
};
Text.defaultProps = {
  size: 4,
  weight: 300
};

export default Text;
