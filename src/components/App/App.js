import React from "react";
import "./App.scss";
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";
import FullHeightWrapper from "../FullHeightWrapper/FullHeightWrapper";
import Header from "../Header/Header";
import VSheader from "../VSheader/VSheader";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const App = () => {
  return (
    <ParallaxContainer>
      <Navbar shadow={false} />
      <FullHeightWrapper>
        <VSheader size={2} shadow={false}>
          Test header
        </VSheader>
        <Hero>We are Vengel Studio</Hero>
      </FullHeightWrapper>
      <FullHeightWrapper>
        <Header>test2</Header>
      </FullHeightWrapper>
      <FullHeightWrapper>
        <Header>test3</Header>
      </FullHeightWrapper>
    </ParallaxContainer>
  );
};

export default App;
