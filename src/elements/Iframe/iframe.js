import React from "react";
import "./iframe.css";

const Iframe = (props) => {
  return (
    <div className="iframeWraper">
      <iframe
        src={props.src}
        title="Video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Iframe;
