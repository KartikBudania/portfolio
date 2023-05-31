import React from "react";
import leads from "./leads.png";
import blackjack from "./blackjack.png";
import colorPicker from "./colorPicker.png";
import portfolio from "./portfolio.png";
import harmony from "./Harmony.png";
import codeEditor from "./Code-Editor.png";

const Projects = () => {
  return (
    <section id="work">
      <h1>{'<wrapper id= "work">'}</h1>
      <div className="projects">
        <div className="project">
          <a href="https://kartikbudania.github.io/Harmony/" target="_blank">
            <img src={harmony} id="firstimg"></img>
          </a>
          <h2>// Harmony - The Music Player</h2>
          <h3>
            This music player is a web-based application that allows users to
            stream and listen to their favorite songs and music playlists from
            anywhere, at any time. It provides a user-friendly interface that is
            easy to navigate and supports multiple audio formats.
          </h3>
          <h2>// Tech Stack</h2>
          <ul className="stacks">
            <li className="techstack">REACT</li>
            <li className="techstack">HTML</li>
            <li className="techstack">CSS</li>
          </ul>
          <h3>
            <a href="https://kartikbudania.github.io/Harmony/" target="_blank">
              Visit Site <i className="fa-solid fa-link visit-site"></i>
            </a>
            <a href="https://github.com/KartikBudania/Harmony" target="_blank">
              See the code <i className="fa-brands fa-github"></i>
            </a>
          </h3>
        </div>
        <div className="project">
          <a
            href="https://kartikbudania.github.io/Code-Editor/"
            target="_blank"
          >
            <img src={codeEditor}></img>
          </a>
          <h2>// Code Editor WebApp</h2>
          <h3>
            This online code editor is a web-based application that provides a
            user-friendly interface for writing and editing code in various
            programming languages. It allows users to write and test code in
            real-time, without the need to install any software on their
            computer.
          </h3>
          <h2>// Tech Stack</h2>
          <ul className="stacks">
            <li className="techstack">REACT</li>
            <li className="techstack">HTML</li>
            <li className="techstack">CSS</li>
          </ul>
          <h3>
            <a
              href="https://kartikbudania.github.io/Code-Editor/"
              target="_blank"
            >
              Visit Site <i className="fa-solid fa-link visit-site"></i>
            </a>
            <a
              href="https://github.com/KartikBudania/Code-Editor"
              target="_blank"
            >
              See the code <i className="fa-brands fa-github"></i>
            </a>
          </h3>
        </div>
        <div className="project">
          <a
            href="https://kartikbudania.github.io/Color-Picker/hex.html"
            target="_blank"
          >
            <img src={colorPicker}></img>
          </a>
          <h2>// Color Picker WebApp</h2>
          <h3>
            I made this WebApp whose background color will change randomly as
            you click on the "Click Me" button, and you can pick any random
            color you like for your project
          </h3>
          <h2>// Tech Stack</h2>
          <ul className="stacks">
            <li className="techstack">JAVASCRIPT</li>
            <li className="techstack">HTML</li>
            <li className="techstack">CSS</li>
          </ul>
          <h3>
            <a
              href="https://kartikbudania.github.io/Color-Picker/hex.html"
              target="_blank"
            >
              Visit Site <i className="fa-solid fa-link visit-site"></i>
            </a>
            <a
              href="https://github.com/KartikBudania/Color-Picker"
              target="_blank"
            >
              See the code <i className="fa-brands fa-github"></i>
            </a>
          </h3>
        </div>
        <div className="project">
          <a
            href="https://github.com/KartikBudania/My-Portfolio"
            target="_blank"
          >
            <img src={portfolio}></img>
          </a>
          <h2>// This Portfolio</h2>
          <h3>
            Not much to say here! This one just gave me a good excuse to spend a
            weekend practicing with React and CSS
          </h3>
          <h2>// Tech Stack</h2>
          <ul className="stacks">
            <li className="techstack">REACT</li>
            <li className="techstack">EmailJS</li>
            <li className="techstack">HTML</li>
            <li className="techstack">CSS</li>
          </ul>
          <h3>
            <a
              href="https://github.com/KartikBudania/My-Portfolio"
              target="_blank"
            >
              See the code <i className="fa-brands fa-github"></i>
            </a>
          </h3>
        </div>
        {/* <div className="project">
                    <a href="https://github.com/KartikBudania/Leads-Tracker-ChromeExtension" target="_blank"><img src={leads}></img></a>
                    <h2>// Leads Tracker Chrome Extension</h2>
                    <h3>Using this chrome extension we can save meaningful tabs/URLs and can open them whenever needed. It's similar to the bookmark feature in chrome.</h3>
                    <h2>// Tech Stack</h2>
                    <ul className="stacks">
                        <li className="techstack">JAVASCRIPT</li>
                        <li className="techstack">HTML</li>
                        <li className="techstack">CSS</li>
                        <li className="techstack">LOCAL STORAGE</li>
                    </ul>
                    <h3><a href="https://github.com/KartikBudania/Leads-Tracker-ChromeExtension" target="_blank">See the code <i className="fa-brands fa-github"></i></a></h3>
                </div> */}
        {/* <div className="project">
                    <img src={blackjack}></img>
                    <h2>// BlackJack Game</h2>
                    <h3>I made this Blackjack game to spend a few hours playing it.</h3>
                    <h2>// Tech Stack</h2>
                    <ul className="stacks">
                        <li className="techstack">JAVASCRIPT</li>
                        <li className="techstack">HTML</li>
                        <li className="techstack">CSS</li>
                    </ul>
                    <h3><a href="https://kartikbudania.github.io/Blackjack-Game/" target="_blank">Visit the site <i className="fa-solid fa-link"></i></a></h3>
                    <h3><a href="https://github.com/KartikBudania/Blackjack-Game" target="_blank">See the code <i className="fa-brands fa-github"></i></a></h3>
                </div> */}
      </div>
      <h1>{"</wrapper>"}</h1>
    </section>
  );
};

export default Projects;
