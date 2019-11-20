import React from "react";
import "./Person.scss";
import Text from "../Shared/Text/Text";
import VSheader from "../Shared/Header/Header";
import Icon from "../Shared/Icon/Icon";

const Person = props => {
  const getClickableIcons = () => {
    let clickableIcons = [];
    props.iconsWithLinks.forEach(element => {
      clickableIcons.push(
        <a href={element.goToUrl}>
          <Icon url={element.iconUrl}></Icon>
        </a>
      );
    });
    return clickableIcons;
  };

  return (
    <div className="person">
      <div className="person-info">
        <VSheader size={3}>
          {props.name}
          <br />
          {props.surname}
        </VSheader>
        <br></br>
        <Text size={3}>{props.description}</Text>
        <div className="person-icons">
          {getClickableIcons().map(el => (
            <div>{el}</div>
          ))}
        </div>
      </div>
      <div className="person-img">
        <img src={props.imgUrl}></img>
      </div>
    </div>
  );
};

export default Person;
