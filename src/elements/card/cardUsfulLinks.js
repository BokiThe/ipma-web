import React from "react";
import TextComponent from "../text/text";
import Link from "../text/link";
import "./card.css";

const CardUsfulLinks = (props) => {
  return (
    <div className={props.className}>
      <TextComponent className="title-m" text={props.title} />
      <div className="titleBorder">
        <div className="filler"></div>
      </div>
      <Link
        className="cardLink"
        href={props.cardHref1}
        linkText={props.cardText1}
      />
      <Link
        className="cardLink"
        href={props.cardHref2}
        linkText={props.cardText2}
      />
      <Link
        className="cardLink"
        href={props.cardHref3}
        linkText={props.cardText3}
      />
      <Link
        className="cardLink"
        href={props.cardHref4}
        linkText={props.cardText4}
      />
      <Link
        className="cardLink"
        href={props.cardHref5}
        linkText={props.cardText5}
      />
    </div>
  );
};

export default CardUsfulLinks;
