import React from "react";
import "./ProjectsSection.scss";
import VSheader from "../../Shared/Header/Header";
import ProjectCard from "../../ProjectCard/ProjectCard";
import Cardman from "../../../assets/images/projects/cardman.png";

const ProjectsSection = () => {
  return (
    <section className="projects">
      <VSheader size={2} shadow={true}>
        Our projects
      </VSheader>
      <div className="carousel">
        <ProjectCard
          title={"Cardman Multiplayer"}
          description={
            "A combination of a traditional hangman game and a card game"
          }
          screenshot={Cardman}
        />
        <ProjectCard
          title={"Cardman Multiplayer"}
          description={
            "A combination of a traditional hangman game and a card game"
          }
          screenshot={Cardman}
        />
        <ProjectCard
          title={"Cardman Multiplayer"}
          description={
            "A combination of a traditional hangman game and a card game"
          }
          screenshot={Cardman}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
