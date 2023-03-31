import React from "react";
import { Link } from "react-router-dom";
import imagen from "../assets/me1.jpg";
import Button from "./Button";

const Intro = () => {
  return (
    <div className="start">
      <header className="headerIntro">
        <img alt="img" src={imagen} />
        <p>Front-end Developer</p>
        <h1 className="text">{`<h1>Joseph Gaitan</h1>`}</h1>
        <Link to="/home">
          <Button text={"Enter My World"} />
        </Link>
      </header>
    </div>
  );
};

export default Intro;
