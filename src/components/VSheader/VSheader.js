import React from "react";

export const VSheader = props => {
    let header = React.createElement(props.size, {}, props.children);
    return <div>{header}</div>;
};

export default VSheader;
