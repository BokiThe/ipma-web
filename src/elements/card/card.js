import React from "react";
import Button from "../button/button";
import TextComponent from "../text/text";

const CardComponent = (props) => {
  return (
    <div className={props.className}>
      <TextComponent className="title-m" text={props.title} />
      <TextComponent className="subtitle" text={props.subtitle} />
      <Button className="btnLarge" text={props.BtnText} />
    </div>
  );
};

export default CardComponent;
