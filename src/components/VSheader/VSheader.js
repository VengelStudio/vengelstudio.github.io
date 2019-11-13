import React from "react";
import "./VSheader.scss";

export const VSheader = props => {
    let header = React.createElement(
        props.size,
        { className: "vs-header" },
        props.children
    );
    return <div>{header}</div>;
};

export default VSheader;
