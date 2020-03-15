import React from "react";
import "./App.scss";
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";
import FullHeightWrapper from "../FullHeightWrapper/FullHeightWrapper";
import Hero from "../Shared/Hero/Hero";
import ProjectsSection from "../Sections/ProjectsSection/ProjectsSection";
import ContactSection from "../Sections/ContactSection/ContactSection";
import FooterSection from "../Sections/FooterSection/FooterSection";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import KtoTerazPrivacyPolicy from "../KtoTerazPrivacyPolicy/KtoTerazPrivacyPolicy";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/kto-teraz/privacy-policy">
          <KtoTerazPrivacyPolicy />
        </Route>
        <Route path="/">
          <ParallaxContainer>
            <FullHeightWrapper>
              <CompanyLogo />
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
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
