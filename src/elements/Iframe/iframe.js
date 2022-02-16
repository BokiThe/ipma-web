import React from "react";
import "./iframe.css";

const Iframe = (props) => {
  return (
    <div className="iframeWraper">
      <iframe
        style={{ borderRadius: "5px" }}
        width="100%"
        height="auto"
        src={props.src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
export default Iframe;
