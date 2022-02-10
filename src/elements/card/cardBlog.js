import React from "react";
import TextComponent from "../text/text";
import Image from "react-bootstrap/Image";
import "./card.css";

const CardBlogComponent = (props) => {
  return (
    <div className={props.className}>
      <Image fluid className={props.imgClass} src={props.src} alt={props.alt} />
      <TextComponent className="title-xs " text={props.title} />
      <a href={props.href} id={props.linkId}>
        {props.linkText}
      </a>
    </div>
  );
};

export default CardBlogComponent;
