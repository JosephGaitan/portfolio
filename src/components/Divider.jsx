import React from "react";

const Divider = () => {
  return (
    <div className="divSvgLine">
      <p>
        <span>S</span>
        <span>C</span>
        <span>R</span>
        <span>O</span>
        <span>L</span>
        <span>L</span>
      </p>
      <svg className="svgLine" width="1" fill="#021963" opacity="50%">
        <line x1="0" y1="0" x2="0" y2="700" stroke=" #021963" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
};

export default Divider;
