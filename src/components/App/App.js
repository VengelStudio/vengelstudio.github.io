import React from "react";
import "./App.scss";
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";
import FullHeightWrapper from "../FullHeightWrapper/FullHeightWrapper";
import Hero from "../Shared/Hero/Hero";
import ProjectsSection from "../Sections/ProjectsSection/ProjectsSection";
import ContactSection from "../Sections/ContactSection/ContactSection";
import FooterSection from "../Sections/FooterSection/FooterSection";

const App = () => {
  return (
    <ParallaxContainer>
      <FullHeightWrapper>
        <Hero>
          <div className="text-break">We are </div>Vengel Studio
        </Hero>
      </FullHeightWrapper>

      <FullHeightWrapper>
        <ProjectsSection />
      </FullHeightWrapper>
      <FullHeightWrapper>
        <ContactSection />
      </FullHeightWrapper>
      <FooterSection />
    </ParallaxContainer>
  );
};

export default App;
