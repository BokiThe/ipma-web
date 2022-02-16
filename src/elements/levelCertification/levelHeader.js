import React from "react";
import TextComponent from "../text/text";
import Link from "../text/link";
import vector_icon from "../../assets/icons/vector_icon.svg";
import "./levelCertification.css";
const LevelHeader = (props) => {
  return (
    <div className="LevelHeader">
      <TextComponent className="title-xl" text={props.title} />
      <TextComponent className="subtitle" text={props.subtitle} />
      <Link
        className="cardLink"
        href={props.href}
        linkText={[<img src={vector_icon} alt="vector_icon" />]}
      />
    </div>
  );
};
export default LevelHeader;
