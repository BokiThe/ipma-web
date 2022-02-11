import React from "react";
import TextComponent from "../text/text";
import Image from "react-bootstrap/Image";
import "./card.css";

const CardBlogComponent = (props) => {
  return (
    <div className={props.className}>
      <div>
        <Image
          fluid
          className={props.imgClass}
          src={props.src}
          alt={props.alt}
        />
      </div>
      <TextComponent className="title-xs " text={props.title} />
      <a href={props.href} className={props.linkClass}>
        {props.linkText}
      </a>
    </div>
  );
};

export default CardBlogComponent;
