import React, { useEffect, useRef } from "react";
import "./Person.scss";
import { TweenMax, Linear, TimelineMax } from "gsap";
import Text from "../Shared/Text/Text";
import Header from "../Shared/Header/Header";
import Icon from "../Shared/Icon/Icon";

const Person = props => {
  const tl = new TimelineMax({ delay: 0 });
  let personImg = useRef(null);
  let contactBar = useRef(null);

  useEffect(() => {
    tl.set(personImg, { opacity: 0 });
    tl.fromTo(contactBar, 1, { x: -12000, ease: Linear.ease }, { x: 0 }).fromTo(
      personImg,
      1,
      { x: 900, opacity: 0, ease: Linear.ease },
      { x: 0, opacity: 1, ease: Linear.ease }
    );
  });

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
    <div
      className="person"
      ref={element => {
        contactBar = element;
      }}
    >
      <div className="person-info">
        <Header size={3}>
          {props.name}
          <br />
          {props.surname}
        </Header>
        <br></br>
        <Text size={3}>{props.description}</Text>
        <div className="person-icons">
          {getClickableIcons().map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        </div>
      </div>
      <div
        className="person-img"
        ref={element => {
          personImg = element;
        }}
      >
        <img src={props.imgUrl} alt="person"></img>
      </div>
    </div>
  );
};

export default Person;
