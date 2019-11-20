import React from "react";
import "./VSheader.scss";
import PropTypes from "prop-types";

export const VSheader = props => {
  let header = React.createElement(
    `h${props.size}`,
    { className: `vs-header shadow-${props.shadow}` },
    props.children
  );
  return <React.Fragment>{header}</React.Fragment>;
};
VSheader.propTypes = {
  size: PropTypes.number,
  shadow: PropTypes.bool
};
VSheader.defaultProps = {
  size: 4,
  shadow: false
};

export default VSheader;
