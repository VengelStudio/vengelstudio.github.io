import React from "react";
import "./App.scss";
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";
import FullHeightWrapper from "../FullHeightWrapper/FullHeightWrapper";
import VSheader from "../VSheader/VSheader";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Text from "../Text/Text";
import ContactSection from "../Sections/ContactSection/ContactSection";
import ProjectsSection from "../Sections/ProjectsSection/ProjectsSection";

const App = () => {
  return (
    <ParallaxContainer>
      <Navbar shadow={false} />
      <FullHeightWrapper>
        <Hero>We are Vengel Studio</Hero>
      </FullHeightWrapper>
      <FullHeightWrapper>
        <ProjectsSection />
      </FullHeightWrapper>
      <FullHeightWrapper>
        <ContactSection />
      </FullHeightWrapper>
    </ParallaxContainer>
  );
};

export default App;
