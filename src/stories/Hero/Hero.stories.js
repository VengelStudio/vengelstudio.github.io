import React from "react";
import "./Hero.stories.scss";
import Hero from "../../components/Shared/Hero/Hero";

export default { title: "Typography|/Hero" };

export const normal = () => (
  <div className="hero-wrapper">
    <Hero>Vengel Studio Hero</Hero>
  </div>
);
