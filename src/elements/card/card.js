import React from "react";
import { Link } from "react-router-dom";
import TextComponent from "../text/text";
import "./card.css";

const CardComponent = (props) => {
  return (
    <div id={props.id} className={props.className}>
      <TextComponent className="title-l" text={props.title} />
      <TextComponent className="subtitle cardSubtitle" text={props.subtitle} />
      <Link style={{ width: "50%" }} className="btnCard" to={props.goTo}>
        {props.BtnText}
      </Link>
    </div>
  );
};

export default CardComponent;
