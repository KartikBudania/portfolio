import React from "react";

const Projects= ()=>{
    return(
        <section id="work">
            <h1>{'<wrapper id= "work">'}</h1>
            <section className="projects">
                <div className="project">
                    <img src="./leadsTracker.png"></img>
                    <p>// Tech Stack</p>
                    <ul>
                        <li>REACT</li>
                        <li>JAVASCRIPT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <p>// See It In Action</p>
                    <p>This chrome extension using which we cansave important tabs/URLs and can open them whenever needed. Its similar to the bookmark feature in chrome.</p>
                    <a>Visit the site <i class="fa-solid fa-link"></i></a>
                    <a>See the code <i class="fa-brands fa-github"></i></a>
                </div>
                <div className="project">
                    <img src="./blackjack.png"></img>
                    <p>// Tech Stack</p>
                    <ul>
                        <li>REACT</li>
                        <li>JAVASCRIPT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <p>// See It In Action</p>
                    <p>I made this Blackjack game just to spend few hours playing it.</p>
                    <a>Visit the site <i class="fa-solid fa-link"></i></a>
                    <a>See the code <i class="fa-brands fa-github"></i></a>
                </div>
                <div className="project">
                    <img src="./colorPicker.png"></img>
                    <p>// Tech Stack</p>
                    <ul>
                        <li>REACT</li>
                        <li>JAVASCRIPT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <p>// See It In Action</p>
                    <p>I made this webpage whose background color will change randomly as you click on the "Click Me" button, and you can pick any random color you like for your project</p>
                    <a>Visit the site <i class="fa-solid fa-link"></i></a>
                    <a>See the code <i class="fa-brands fa-github"></i></a>
                </div>
                <div className="project">
                    <img src="./video.mp4"></img>
                    <p>// Tech Stack</p>
                    <ul>
                        <li>REACT</li>
                        <li>JAVASCRIPT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <p>// See It In Action</p>
                    <p>In this project I made this video controller and also add a preloader in the starting for the time video is loading</p>
                    <a>Visit the site <i class="fa-solid fa-link"></i></a>
                    <a>See the code <i class="fa-brands fa-github"></i></a>
                </div>
                <div className="project">
                    <img src="./portfolio.png"></img>
                    <p>// Tech Stack</p>
                    <ul>
                        <li>REACT</li>
                        <li>JAVASCRIPT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <p>// See It In Action</p>
                    <p>Not much to say here! This one just gave me a good excuse to spend a weekend practicing with React and CSS</p>
                    <a>Visit the site <i class="fa-solid fa-link"></i></a>
                    <a>See the code <i class="fa-brands fa-github"></i></a>
                </div>
            </section>
            <h1>{'</wrapper>'}</h1>
        </section>
    )
}

export default Projects;