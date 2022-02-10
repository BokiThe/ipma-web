import React from "react";
import TextComponent from "../text/text";
import "./card.css";

const CardContactComponent = (props) => {
  return (
    <div className={props.className}>
      <TextComponent className="title-m" text={props.title} />
      <div className="titleBorder">
        <div className="filler"></div>
      </div>
      <TextComponent className="subtitle-s" text={props.subtitle} />
      <div className="contactBox">
        <span>
          <img src={props.srcIcon1} alt={props.altIcon1} />
        </span>
        <TextComponent className="subtitle-s" text={props.contactInfo1} />
      </div>
      <div className="contactBox">
        <span>
          <img src={props.srcIcon2} alt={props.altIcon2} />
        </span>
        <TextComponent className="subtitle-s" text={props.contactInfo2} />
      </div>
      <div className="contactBox">
        <span>
          <img src={props.srcIcon3} alt={props.altIcon3} />
        </span>
        <TextComponent className="subtitle-s" text={props.contactInfo3} />
      </div>
    </div>
  );
};

export default CardContactComponent;
