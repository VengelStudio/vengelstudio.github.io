import React, { useEffect, useRef } from "react";
import "./Person.scss";
import { TweenMax, Linear, TimelineMax, Power2 } from "gsap";
import Text from "../Shared/Text/Text";
import Header from "../Shared/Header/Header";
import Icon from "../Shared/Icon/Icon";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const Person = props => {
  const tl = new TimelineMax();
  let personImg = useRef(null);
  let contactBar = useRef(null);

  // useEffect(() => {
  //   tl.set(personImg, { opacity: 0 });
  //   tl.fromTo(
  //     contactBar,
  //     1,
  //     { x: -12000, ease: Power2.easeOut },
  //     { x: 0 }
  //   ).fromTo(
  //     personImg,
  //     1,
  //     { x: 300, opacity: 0, ease: Power2.easeOut },
  //     { x: 0, opacity: 1, ease: Power2.easeOut }
  //   );
  // });

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
    <Controller>
      <Scene indicators={true} triggerElement="#contactBar">
        <Tween
          duration={5}
          from={{ x: -4200, ease: Power2.easeOut }}
          to={{ x: 0 }}
        >
          <div
            className="person"
            id="contactBar"
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
            <Tween
              duration={1}
              from={{ x: 300, opacity: 0, ease: Power2.easeOut }}
              to={{ x: 0, opacity: 1, ease: Power2.easeOut }}
            >
              <div
                className="person-img"
                ref={element => {
                  personImg = element;
                }}
              >
                <img src={props.imgUrl} alt="person"></img>
              </div>
            </Tween>
          </div>
        </Tween>
      </Scene>
    </Controller>
  );
};

export default Person;
