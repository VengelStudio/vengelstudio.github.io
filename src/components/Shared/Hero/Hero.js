import React from "react";
import "./Hero.scss";

const Hero = props => {
  return <span className="hero">{props.children}</span>;
};

export default Hero;
