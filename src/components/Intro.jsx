import React from "react";
import imagen from "../assets/programmer.gif";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="start">
      <header className="headerIntro">
        <img alt="img" src={imagen} />
        <p >Front-end Developer</p>
        <h1 className="text">{`<h1>Joseph Gaitan</h1>`}</h1>
        <Link to="/home">
          <span className="button ">
            Enter my World
          </span>
        </Link>
      </header>
    </div>
  );
};

export default Intro;
