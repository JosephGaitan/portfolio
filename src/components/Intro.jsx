import React from "react";
import imagen from "../assets/programmer.gif";
import Button from "./Button";


const Intro = () => {
  return (
    <div className="start">
      <header className="headerIntro">
        <img alt="img" src={imagen} />
        <p >Front-end Developer</p>
        <h1 className="text">{`<h1>Joseph Gaitan</h1>`}</h1>
          <Button link={"/home"} text={"Enter My World"}/>
      </header>
    </div>
  );
};

export default Intro;
