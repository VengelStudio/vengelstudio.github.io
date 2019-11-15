import React from "react";
import "./App.scss";
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";
import FullHeightWrapper from "../FullHeightWrapper/FullHeightWrapper";
import VSheader from "../VSheader/VSheader";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const App = () => {
  return (
    <ParallaxContainer>
      <Navbar shadow={false} />
      <FullHeightWrapper>
        <Hero>We are Vengel Studio</Hero>
      </FullHeightWrapper>
      <FullHeightWrapper>
        <VSheader size={2} shadow={true}>
          Test header
        </VSheader>
      </FullHeightWrapper>
      <FullHeightWrapper>
        <VSheader size={4} shadow={false}>
          Test header
        </VSheader>
      </FullHeightWrapper>
    </ParallaxContainer>
  );
};

export default App;
