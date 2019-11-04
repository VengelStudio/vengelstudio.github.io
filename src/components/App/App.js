import React from "react";
import "./App.scss";
import ParallaxBg from "../ParallaxBg/ParallaxBg";
import FullHeightWrapper from "../FullHeightWrapper/FullHeightWrapper";
import Header from "../Header/Header";

const App = () => {
  return (
    <div className="main">
      <ParallaxBg />
      <FullHeightWrapper>
        <Header>We are Vengel Studio.</Header>
      </FullHeightWrapper>
      <FullHeightWrapper>
        <Header>test2</Header>
      </FullHeightWrapper>
      <FullHeightWrapper>
        <Header>test3</Header>
      </FullHeightWrapper>
    </div>
  );
};

export default App;
