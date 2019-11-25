import React from "react";
import "./ProjectCard.scss";
import Header from "../Shared/Header/Header";
import Text from "../Shared/Text/Text";
import Button from "../Button/Button";

const ProjectCard = props => {
  return (
    <div className="card-wrapper">
      <div className="project-screenshot">
        <img className="screenshot" src={props.screenshot}></img>
      </div>
      <div className="project-info">
        <div className="project-title">
          <Header size={6}>{props.title}</Header>
        </div>
        <div className="project-description">
          <Text size={4}>{props.description}</Text>
        </div>
        <Button size={4} type="learn">
          Learn more..
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
