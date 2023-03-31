import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/me1.jpg";
import flowers from "../assets/flowers.jpg";
import icons from "../assets/icons.png";
import Divider from "../components/Divider";
import Button from "../components/Button";
import imgJogg from "../assets/jogg.jpg";
import seller from "../assets/seller.jpg";
import rick from "../assets/rickNmorty.png";
import cal from "../assets/cal.png";
import git from "../assets/github.png";
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
        <section id="aboutMe" className="styledContainer main">
          <article className="hidden styledContainer gridContainer reverseColumn">
            <div>
              <h2>
                Hi! My name is <span>Joseph.</span>
              </h2>
              <p className="p1">
                I'm a <span>passionate developer</span> from Colombia. Let me
                help you create the next <span>global hit App.</span>{" "}
              </p>
            </div>
            <div className="divImg2">
              <img className="meImg" alt="img" src={image} />
            </div>
          </article>
        </section>
        <div className="hidden">
          <Divider />
        </div>
        <section className="main styledContainer">
          <div className="styledContainer hidden">
            <h3>About me</h3>
            <p>
              My emphasis is on building <span>efficient and optimized</span>{" "}
              software in a creative way. When it comes to coding, I always
              implement <span>best practices</span> and a lot of planning.
            </p>
          </div>
          <article className="styledContainer gridContainer hidden">
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
                My passion for technology started when I studied electronics at
                the age of 18, where I built robots and electric circuits using
                Arduino. From there, my love for software development grew as I
                started experimenting with various technologies and coding
                languages. I even built my own Doom-like video game and
                documented the whole process in an amateur blog I coded with
                basic knowledge. I didn't even noticed I had started my career
                in front-end development with that blog. But I certainly loved
                every second I spent working on it.
              </p>
            </div>
          </article>
          <article className="styledContainer gridContainer reverseColumn  hidden">
            <div>
              <p>
                <span>In addition to my programming pursuits</span>, I also
                prioritize my physical and mental well-being through regular
                exercise. I firmly believe that a healthy body is essential for
                a <span>healthy mind</span>, and I have found that staying
                active helps me to maintain focus and productivity in all areas
                of my life. When I'm not working or exercising, I enjoy spending
                time with my loved ones, whether that be through{" "}
                <span>quality time</span> with family or socializing with
                friends. I believe that maintaining strong connections with
                those closest to us is crucial for maintaining a balanced and{" "}
                <span>fulfilling life</span>.
              </p>
            </div>
            <div className="divImg2">
              <img
                className="delayed-img"
                src={imgJogg}
                alt="jogging"
                height="320px"
              />
            </div>
          </article>
        </section>
        <section className="main styledContainer" id="work">
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
          <article className="hidden styledContainer gridContainer">
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
          <article className="hidden styledContainer gridContainer reverseColumn">
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
                className="delayed-img me"
                src={seller}
                alt="icons"
                height="320px"
              />
            </div>
          </article>
          <article className="styledContainer hidden">
            <h3>Let's work together!</h3>
            <p>
              Currently, my focus is on front-end development, but I am eager to
              expand my knowledge and expertise to the backend world. I am
              particularly interested in <span>learning</span> NodeJS and
              databases like MongoDB since I want the{" "}
              <span>full MERN stack</span>.
            </p>
            <p>
              I would be honored to be considered for any positions that align
              with my skills. <span>Thank you</span> for considering my
              application, and I look forward to discussing my qualifications
              with you further.
            </p>
            <div className="divImg2">
              <Button
                link={
                  "mailto:joegaitan195@gmail.com?subject=Hi Joseph!, I would like to hire you"
                }
                text={"Get In Touch"}
              />
            </div>
          </article>
        </section>
        <div className="hidden">
          <Divider />
        </div>
        <section className="main styledContainer" id="projects">
          <article className="hidden styledContainer gridContainer">
            <div className="divImg2">
              <img
                className="delayed-img "
                src={rick}
                alt="icons"
                height="320px"
              />
            </div>
            <div>
              <h3>Rick and Morty wiki App</h3>
              <p>
                This project was created using{" "}
                <span>the rick and morty API</span>, JavaScript, Reactjs,
                React-Router-DOM, TailwindCSS and ChartJs. In this app you will
                find a complete list of characters from rick and morty. They can
                be filtered using the searching bar I created or just by
                clicking “next”. It also comes with different pages that catch
                information of all the existing places and episodes of the show.
                Lastly an automatic graph that shows the genders and status of
                the characters. I used that info to show the mortality rate of
                each episode. (it will auto update the stats of the graph in
                case the info in the API changes)
              </p>
              <div className="divImg2">
                <Button
                  link={"https://rickandmorty-api-joe.netlify.app/"}
                  text="Live"
                />
                <Button
                  link={"https://github.com/JosephGaitan/rick-react"}
                  text="Code"
                />
              </div>
            </div>
          </article>
          <article className="hidden styledContainer reverseColumn gridContainer">
            <div>
              <h3>Expenses Planner</h3>
              <p>
                <span>Control your expenses</span> by using this App. Add
                expenses and organize them by category. Every time an expense is
                added, the calculator will let you know the new available
                budget. Every expense can be filtered, deleted or modified. It
                also saves the results on local storage for future uses. This
                project was built with Reactjs, JavaScript and CSS.
              </p>
              <div className="divImg2">
                <Button
                  link={"https://expenses-planner-react.netlify.app/"}
                  text="Live"
                />
                <Button
                  link={"https://github.com/JosephGaitan/expenses_planner"}
                  text="Code"
                />
              </div>
            </div>
            <div className="divImg2">
              <img
                className="delayed-img "
                src={cal}
                alt="icons"
                height="320px"
                width="320px"
              />
            </div>
          </article>
          <article className="hidden styledContainer gridContainer">
            <div className="divImg2">
              <img
                className="delayed-img "
                src={git}
                alt="icons"
                height="320px"
              />
            </div>
            <div>
              <h3>My GitHub portfolio</h3>
              <p>
                If you want to check the code of this <span>portfolio</span>;
                this is my <span>github</span> profile, there, you will find
                more projects built by me. Most of them are finished, and some
                of them are still in their beta version. I personally recommend
                you to check those that are marked as favorites. Please, feel
                free to explore my code and projects.
              </p>
              <p>
                <span>
                  If you have any doubts or recommendations, do not hesitate
                  contacting me.
                </span>
              </p>
              <div className="divImg2">
                <Button
                  link={"https://github.com/JosephGaitan"}
                  text="GitHub Profile"
                />
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
