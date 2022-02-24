import React from "react";
import TextComponent from "../text/text";

import { Link } from "react-router-dom";
import "./card.css";

const CardUsfulLinks = (props) => {
  return (
    <div className={props.className}>
      <TextComponent className="title-m" text={props.title} />
      <div className="titleBorder">
        <div className="filler"></div>
      </div>
      <Link className="cardLink" to={props.cardHref1}>
        {props.cardText1}
      </Link>
      <Link className="cardLink" to={props.cardHref2}>
        {props.cardText2}
      </Link>
      <Link className="cardLink" to={props.cardHref3}>
        {props.cardText3}
      </Link>
      <Link className="cardLink" to={props.cardHref4}>
        {props.cardText4}
      </Link>
      <Link className="cardLink" to={props.cardHref5}>
        {props.cardText5}
      </Link>
    </div>
  );
};

export default CardUsfulLinks;
