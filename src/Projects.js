import React from "react";
import leads from './leads.png';
import blackjack from './blackjack.png';
import colorPicker from './colorPicker.png';
import portfolio from './portfolio.png';
import codeEditor from './Code-Editor.png'

const Projects= ()=>{
    return(
        <section id="work">
            <h1>{'<wrapper id= "work">'}</h1>
            <div className="projects">
                <div className="project">
                    <img src={codeEditor} id="firstimg"></img>
                    <h2>// Code Editor WebApp</h2>
                    <h3>This code editor is a clone of CodePen</h3>
                    <h2>// Tech Stack</h2>
                    <ul className="stacks">
                        <li className="techstack">REACT</li>
                        <li className="techstack">HTML</li>
                        <li className="techstack">CSS</li>
                    </ul>
                    <h3><a href="https://kartikbudania.github.io/Code-Editor/" target="_blank">Visit the site <i className="fa-solid fa-link"></i></a></h3>
                    <h3><a href="https://github.com/KartikBudania/Code-Editor" target="_blank">See the code <i className="fa-brands fa-github"></i></a></h3>
                </div>
                <div className="project">
                    <img src={leads} ></img>
                    <h2>// Leads Tracker Chrome Extension</h2>
                    <h3>Using this chrome extension we can save meaningful tabs/URLs and can open them whenever needed. It's similar to the bookmark feature in chrome.</h3>
                    <h2>// Tech Stack</h2>
                    <ul className="stacks">
                        <li className="techstack">JAVASCRIPT</li>
                        <li className="techstack">HTML</li>
                        <li className="techstack">CSS</li>
                        <li className="techstack">LOCAL STORAGE</li>
                    </ul>
                    <h3><a href="https://github.com/KartikBudania/Leads-Tracker-ChromeExtension-" target="_blank">See the code <i className="fa-brands fa-github"></i></a></h3>
                </div>
                <div className="project">
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
                </div>
                <div className="project">
                    <img src={colorPicker}></img>
                    <h2>// Color Picker WebApp</h2>
                    <h3>I made this WebApp whose background color will change randomly as you click on the "Click Me" button, and you can pick any random color you like for your project</h3>
                    <h2>// Tech Stack</h2>
                    <ul className="stacks">
                        <li className="techstack">JAVASCRIPT</li>
                        <li className="techstack">HTML</li>
                        <li className="techstack">CSS</li>
                    </ul>
                    <h3><a href="https://kartikbudania.github.io/Color-Picker/hex.html" target="_blank">Visit the site <i className="fa-solid fa-link"></i></a></h3>
                    <h3><a href="https://github.com/KartikBudania/Color-Picker" target="_blank">See the code <i className="fa-brands fa-github"></i></a></h3>
                </div>
                <div className="project">
                    <img src={portfolio}></img>
                    <h2>// This Portfolio</h2>
                    <h3>Not much to say here! This one just gave me a good excuse to spend a weekend practicing with React and CSS</h3>
                    <h2>// Tech Stack</h2>
                    <ul className="stacks">
                        <li className="techstack">REACT</li>
                        <li className="techstack">EmailJS</li>
                        <li className="techstack">HTML</li>
                        <li className="techstack">CSS</li>
                    </ul>
                    <h3><a href="https://github.com/KartikBudania/My-Portfolio" target="_blank">See the code <i className="fa-brands fa-github"></i></a></h3>
                </div>
            </div>
            <h1>{'</wrapper>'}</h1>
        </section>
    )
}

export default Projects;