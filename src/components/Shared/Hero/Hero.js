import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import { TweenMax, Linear } from "gsap";

const Hero = props => {
  let hero = useRef(null);

  useEffect(() => {
    TweenMax.to(hero, 2, { opacity: 1, ease: Linear.ease });
  });
  return (
    <span
      className="hero"
      ref={element => {
        hero = element;
      }}
    >
      {props.children}
    </span>
  );
};

export default Hero;
