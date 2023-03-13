import React from "react";
import { useState } from "react";
import BurgerButton from "./BurgerButton";
import { BsEnvelope, BsFillEnvelopeOpenFill } from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [above, setAbove] = useState(false);

  const handleMouseEnter = () => {
      if(!above){
        setAbove(true);
      }
  }

  const handleMouseLeave = () =>{
    setAbove(!above)
  }

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="navContainer">
        <div className={`links ${active ? "active" : ""}`}>
          <a>About me</a>
          <a>Skills</a>
          <a>Projects</a>
        </div>
        <div className="burger">
          <BurgerButton active={active} handleClick={handleClick} />
        </div>
        <div className={`menuInitial ${active ? "active" : ""} `}></div>
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hire"
          href="mailto:joegaitan195@gmail.com?subject=Hi Joseph!, I would like to hire you"
        >
          <h1>Hire Me </h1>
          {!above ? (
            <BsEnvelope className="iconMessage" />
          ) : (
            <BsFillEnvelopeOpenFill className="iconMessage" />
          )}
        </a>
      </nav>
    </>
  );
};

export default Navbar;
