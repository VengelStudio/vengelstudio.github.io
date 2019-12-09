import React from "react";
import "./Header.stories.scss";
import Header from "../../components/Shared/Header/Header";

export default { title: "Typography|/Header" };

const generateHeaders = () => {
  let arr = [];
  for (let i = 1; i <= 6; i++) {
    arr.push(<Header size={i}>{`Vengel Studio (Header) - size ${i}`}</Header>);
  }
  return arr;
};

const generateHeadersWithShadow = () => {
  let arr = [];
  for (let i = 1; i <= 6; i++) {
    arr.push(
      <Header
        shadow={true}
        size={i}
      >{`Vengel Studio (Header) - size ${i}`}</Header>
    );
  }
  return arr;
};

export const normal = () => (
  <div className="header-wrapper">{generateHeaders()}</div>
);

export const withShadow = () => (
  <div className="header-wrapper">{generateHeadersWithShadow()}</div>
);
