import React from "react";
import "./iframe.css";

const Iframe = (props) => {
  return (
    <div className="iframeWraper">
      <iframe
        width="1000"
        height="500"
        src={props.src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sandbox="allow-scripts allow-modal"
        title="Embedded youtube"
      />
    </div>
  );
};
export default Iframe;
