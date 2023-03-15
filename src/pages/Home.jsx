import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/me.png";
import SvgCircle from "../components/SvgCircle";
import Divider from "../components/Divider";
import SvgWalk from "../components/SvgWalk";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="main">
          <section id="aboutMe">
            <div>
              <h2>
                Hi! My name is <span>Joseph.</span>
              </h2>
              <p className="p1">
                I'm a <span>passionate developer</span> from Colombia. Let me
                help you create the next <span>global hit App.</span>{" "}
              </p>
            </div>
            <div className="divImg">
              <img className="meImg" alt="img" src={image} />
            </div>
          </section>
          <Divider />
          <section className="aboutMe">
            <h3>About me</h3>
            <p>
              My emphasis is on building <span>efficient and optimized</span>{" "}
              software in a creative way. When it comes to coding, I always
              implement <span>best practices</span> and a lot of planning.
            </p>
            <div className="svgCircleText">
              <div>
                <SvgCircle />
              </div>
              <div>
                <p>
                  I am a <span>coder</span>, a <span>creator</span>, a{" "}
                  <span>dreamer.</span>
                </p>
                <p>
                  My passion for technology started when I studied electronics
                  at the age of 18, where I built robots and electric circuits
                  using Arduino. From there, my love for software development
                  grew as I started experimenting with various technologies and
                  coding languages. I even built my own Doom-like video game and
                  documented the whole process in an amateur blog I coded with
                  basic knowledge. I didn't even noticed I had started my career
                  in front-end development with that blog. But I certainly loved
                  every second I spent working on it.
                </p>
              </div>
            </div>
            <article className="articleText svgCircleText">
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  nobis quas perferendis quidem facere error odit ipsum eum sunt
                  delectus, autem aspernatur dolorum possimus assumenda velit
                  voluptatem illo laboriosam quia.
                </p>
              </div>
              <div>
                <SvgWalk />
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
