import React from "react";
import Row from "react-bootstrap/Row";

const Iframe = (props) => {
  return (
    <iframe
      width={props.width}
      height={props.height}
      src={props.src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
};
export default Iframe;
