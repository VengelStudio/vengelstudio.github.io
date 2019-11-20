import React from "react";
import "./Hero.scss";

export const Hero = props => {
  return <span className="hero">{props.children}</span>;
};

export default Hero;
