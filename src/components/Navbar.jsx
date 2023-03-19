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
    if(!active){
      document.body.style.overflow = 'hidden'
    } else {document.body.style.overflow = 'auto'}
  };


  return (
    <div className="fixed">
      <nav className="navContainer">
        <div className={`links ${active ? "active" : ""}`}>
          <a href="#aboutMe"  onClick={()=>{setActive(!active), document.body.style.overflow = 'auto' }}>About me</a>
          <a href="#work" onClick={()=>{setActive(!active), document.body.style.overflow = 'auto' }}>work</a>
          <a onClick={()=>{setActive(!active), document.body.style.overflow = 'auto' }}>Projects</a>
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
    </div>
  );
};

export default Navbar;
