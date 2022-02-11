import React from "react";
import TextComponent from "../text/text";
import "../button/button.css";
import "./card.css";

const CardSubscribe = (props) => {
  return (
    <div className={props.className}>
      <TextComponent className="title-m" text={props.title} />
      <div className="titleBorder">
        <div className="filler"></div>
      </div>
      <form id="subscribeForm">
        <input type="e-mail" placeholder="Enter your email here" />
        <input className="btnSubmit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CardSubscribe;
