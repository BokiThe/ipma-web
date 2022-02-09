import React from "react";
import Button from "../button/button";
import TextComponent from "../text/text";
import "./card.css";

const CardComponent = (props) => {
  return (
    <div className={props.className}>
      <TextComponent className="title-l" text={props.title} />
      <TextComponent className="subtitle cardSubtitle" text={props.subtitle} />
      <Button className="btnLarge" text={props.BtnText} />
    </div>
  );
};

export default CardComponent;
