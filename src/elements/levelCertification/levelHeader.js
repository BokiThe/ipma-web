import React from "react";
import TextComponent from "../text/text";
import Link from "../text/link";
import vectorRedDown_icon from "../../assets/icons/vectorRedDown_icon.svg";
import "./levelCertification.css";

const LevelHeader = (props) => {
  return (
    <div style={{ maxWidth: "840px", margin: "0 auto" }}>
      <TextComponent className="title-xl" text={props.title} />
      <TextComponent className="subtitle" text={props.subtitle} />
      <Link
        className="cardLink"
        href={props.href}
        linkText={[<img src={vectorRedDown_icon} alt="vector_icon" />]}
      />
    </div>
  );
};
export default LevelHeader;
