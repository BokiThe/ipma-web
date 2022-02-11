import React from "react";
import "./text.css";

const Link = (props) => {
  return (
    <a className={props.className} href={props.href}>
      {props.linkText}
    </a>
  );
};
export default Link;
