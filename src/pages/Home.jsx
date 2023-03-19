import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/me1.png";
import flowers from "../assets/flowers.png";
import SvgCircle from "../components/SvgCircle";
import Divider from "../components/Divider";
import imgJogg from "../assets/jogg.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [watching, setWatching] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          const imgs = entry.target.querySelectorAll(".delayed-img");
          imgs.forEach((img, index) => {
            setTimeout(() => {
              img.classList.add("show");
            }, (index + 1) * 1000); // ajusta el tiempo de retardo aquí (en milisegundos)
          });
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="main main2">
          <section id="aboutMe" className="hidden">
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
          <div className="hidden">
            <Divider />
          </div>
          <section className={`aboutMe hidden`}>
            <h3>About me</h3>
            <p>
              My emphasis is on building <span>efficient and optimized</span>{" "}
              software in a creative way. When it comes to coding, I always
              implement <span>best practices</span> and a lot of planning.
            </p>
            <div className="svgCircleText">
              <div className="divImg2">
                <img
                  className="delayed-img"
                  src={flowers}
                  height="320px"
                  width="320px"
                  alt="flwsImg"
                />
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
            <article className="articleText  hidden">
              <div>
                <p>
                  I've been building all kinds of apps with the most popular
                  libraries like reactJs. I improved my javascript skills,
                  learning logic and algorithmic thinking. Right now, my life
                  revolves around programming, my friends-family and exercising,
                  the latter oxygenates my brain and makes me more efficient as
                  a professional.
                </p>
              </div>
              <div>
                <img
                  className="delayed-img"
                  src={imgJogg}
                  alt="jogging"
                  height="320px"
                />
              </div>
            </article>
          </section>
        </div>
        <div className="hidden">
          <Divider />
        </div>
        <section className="main" id="work">
          <article className="aboutMe hidden">
            <h2>My <span>work</span> Aproach</h2>
            <p>
              <span>
                I revel in the challenge of turning complex ideas into elegant
                solutions.
              </span>
            </p>
            <div className="cards">
              <div><img className="trin"/></div>
            </div>
          </article>
          <article className="aboutMe hidden">
          <p>
              Whether crafting <span>intuitive</span> user interfaces or
              designing complex systems from the ground up, I approach every
              task with a sense of curiosity and a commitment to{" "}
              <span>excellence</span>. In the end, my work is not just about
              code or software, but about <span>transforming the world</span>, {" "}
              one pixel at a time.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
