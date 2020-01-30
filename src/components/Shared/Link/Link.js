import React from "react";
import "./Link.scss";
import PropTypes from "prop-types";

export const Link = props => {
  return (
    <a className="link" href={props.src}>
      <span>{props.children}</span>
    </a>
  );
};
Link.propTypes = {
  src: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};
Link.defaultProps = {
  src: "#"
};

export default Link;
