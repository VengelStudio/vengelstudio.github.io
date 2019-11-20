import React from "react";
import "./Icon.scss";
import PropTypes from "prop-types";

export const Icon = props => {
  return <img className="icon" alt="icon" src={props.url}></img>;
};
Icon.propTypes = {
  size: PropTypes.number,
  shadow: PropTypes.bool
};
Icon.defaultProps = {
  size: 4,
  shadow: false
};

export default Icon;
