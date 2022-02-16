import React from "react";
import TextComponent from "../text/text";

const LevelCost = (props) => {
  return (
    <div style={{ width: "80%", justifySelf: "center" }}>
      <TextComponent className="title-s" text={props.title} />
      <div style={{ height: "2px", background: "#ED3E3E" }}></div>

      <TextComponent className="subtitle" text={props.subtitle} />
      <TextComponent className="subtitle" text={props.price} />
    </div>
  );
};

export default LevelCost;
