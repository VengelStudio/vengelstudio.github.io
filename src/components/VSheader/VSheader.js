import React from "react";
import "./VSheader.scss";

export const VSheader = props => {
  let header = React.createElement(
    `h${props.size}`,
    { className: `vs-header shadow-${props.shadow}` },
    props.children
  );
  return <div>{header}</div>;
};

export default VSheader;
