import React from "react";
import TextComponent from "../text/text";
import "./card.css";

const CardImgComponent = (props) => {
  return (
    <div className={props.className}>
      <img className={props.imgClass} src={props.src} alt={props.alt} />
      <TextComponent className="title-s" text={props.title} />
      <TextComponent className="subtitle" text={props.subtitle} />
    </div>
  );
};

export default CardImgComponent;
