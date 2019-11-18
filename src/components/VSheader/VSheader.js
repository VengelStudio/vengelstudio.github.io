import React from "react";
import "./VSheader.scss";

export const VSheader = props => {
  let header = React.createElement(
    `h${props.size}`,
    { className: `vs-header shadow-${props.shadow}` },
    props.children
  );
  return <React.Fragment>{header}</React.Fragment>;
};

export default VSheader;
