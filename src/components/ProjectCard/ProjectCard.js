import React from "react";
import "./ProjectCard.scss";
import VSheader from "../Shared/Header/Header";
import Text from "../Shared/Text/Text";

const ProjectCard = props => {
  return (
    <div className="card-wrapper">
      <div className="project-screenshot">
        <img className="screenshot" src={props.screenshot}></img>
      </div>
      <div className="project-info">
        <div className="project-title">
          <VSheader size={6}>{props.title}</VSheader>
        </div>
        <div className="project-description">
          <Text size={4}>{props.description}</Text>
        </div>
        <p>There will be button component there</p>
      </div>
    </div>
  );
};

export default ProjectCard;
