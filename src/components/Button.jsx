import React from "react";

const Button = ({ text, link, target }) => {
  return <a target="_blank" href={link} className="button">{text}</a>
};

export default Button;
