import React from "react";
import "./Header.scss";
import PropTypes from "prop-types";

export const Header = props => {
  let header = React.createElement(
    `h${props.size}`,
    { className: `header shadow-${props.shadow}` },
    props.children
  );
  return <React.Fragment>{header}</React.Fragment>;
};
Header.propTypes = {
  size: PropTypes.number,
  shadow: PropTypes.bool
};
Header.defaultProps = {
  size: 4,
  shadow: false
};

export default Header;
