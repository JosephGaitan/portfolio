import React from "react";

const BurgerButton = ({handleClick, active}) => {
  return (
      <div onClick={handleClick} className={`icon nav-icon-5 ${active ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
