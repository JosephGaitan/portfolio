import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/me1.png";
import flowers from "../assets/flowers.png";
import icons from "../assets/icons.png";
import Divider from "../components/Divider";
import Button from "../components/Button"
import imgJogg from "../assets/jogg.png";
import seller from "../assets/seller.png";
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
                  <span>In addition to my programming pursuits</span>, I also
                  prioritize my physical and mental well-being through regular
                  exercise. I firmly believe that a healthy body is essential
                  for a <span>healthy mind</span>, and I have found that staying
                  active helps me to maintain focus and productivity in all
                  areas of my life. When I'm not working or exercising, I enjoy
                  spending time with my loved ones, whether that be through{" "}
                  <span>quality time</span> with family or socializing with
                  friends. I believe that maintaining strong connections with
                  those closest to us is crucial for maintaining a balanced and{" "}
                  <span>fulfilling life</span>.
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
        <section className="main aboutMe workContainer" id="work">
          <div className="hidden">
            <h2>
              My <span>work</span> Aproach
            </h2>
            <p>
              <span>
                I revel in the challenge of turning complex ideas into elegant
                solutions.
              </span>
            </p>
            <p>
              Whether crafting <span>intuitive</span> user interfaces or
              designing complex systems from the ground up, I approach every
              task with a sense of curiosity and a commitment to{" "}
              <span>excellence</span>. In the end, my work is not just about
              code or software, but about <span>transforming the world</span>,{" "}
              one pixel at a time.
            </p>
          </div>
          <article className="hidden aboutMe skillsContainer">
            <div className="divImg2">
              <img
                className="delayed-img"
                src={icons}
                alt="icons"
                height="320px"
              />
            </div>
            <div>
              <h3>My technical skills</h3>
              <p>
                include building single page applications using JavaScript, with
                excellent logic, and creating multiple page applications by
                using <span>React router-Dom</span>. I have extensive knowledge
                of <span>ReactJS</span> and how to build apps based on atomic
                design with components. I am proficient in producing elegant
                styles and animations with <span>CSS</span>, including the use
                of modules in CSS and styled components for React. Additionally,
                I am adept at working with <span>TailwindCSS</span>, the CSS
                Framework, and <span>ChartJs</span> to graph data, consume APIs,
                and automate apps that update with the API. I have an excellent
                understanding of <span>Git</span> and Github, including version
                control.
              </p>
            </div>
          </article>
          <article className="hidden aboutMe skillsContainer reverseColumn">
            <div>
              <h3>Apart from technical skills</h3>
              <p>
                Excellent <span>communication skills</span>, both written and
                verbal, coupled with strong problem solving skills, allow me to
                find creative solutions to complex problems. I am{" "}
                <span>proactive, motivated</span> and take the initiative to
                lead projects when necessary. I have exceptional time management
                skills that allow me to prioritize tasks effectively and meet
                deadlines. With a enthusiastic and positive attitude, always
                willing to learn and grow. Also,{" "}
                <span>good customer service</span> skills allow me to work
                closely with customers and understand their needs.
              </p>
            </div>
            <div className="divImg2">
              <img
                className="delayed-img"
                src={seller}
                alt="icons"
                height="320px"
              />
            </div>
          </article>
          <article className="aboutMe hidden">
            <h3>Let's work together!</h3>
            <p>
              Currently, my focus is on front-end development, but I am eager to
              expand my knowledge and expertise to the backend world. I am
              particularly interested in <span>learning</span> NodeJS and databases like
              MongoDB since I want the <span>full MERN stack</span>.
            </p>
            <p>
              I would be honored to be considered for any positions that align
              with my skills. <span>Thank you</span> for considering my application, and I
              look forward to discussing my qualifications with you further.
            </p>
              <div className="divImg2"><Button 
              link={"mailto:joegaitan195@gmail.com?subject=Hi Joseph!, I would like to hire you"} 
              text={"Get In Touch"} /></div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
