import React from "react";
import "./App.scss";
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";
import FullHeightWrapper from "../FullHeightWrapper/FullHeightWrapper";
import VSheader from "../VSheader/VSheader";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Text from "../Text/Text";

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
        <br></br>
        <Text size={1} weight={200}>
          Test text
        </Text>
        <Text size={2} weight={700}>
          Test text
        </Text>
        <Text size={3} weigth={400}>
          Test text
        </Text>
        <Text size={4} weigth={600}>
          Test text
        </Text>
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
