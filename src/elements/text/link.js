import React from "react";
import "./text.css";

const Link = (props) => {
  return (
    <a onClick={props.onClick} className={props.className} href={props.href}>
      {props.linkText}
    </a>
  );
};
export default Link;
