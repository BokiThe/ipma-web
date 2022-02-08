import React from "react";
import "./text.css";
const TextComponent = (props) => {
  return <div className={props.className}>{props.text}</div>;
};
export default TextComponent;
