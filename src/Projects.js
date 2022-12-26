import React from "react";

const Projects= ()=>{
    return(
        <section id="work">
            <h1>{'<wrapper id= "work">'}</h1>
            <section className="projects">
                <div className="project">
                    <img src="./leadsTracker.png"></img>
                    <h2>// Tech Stack</h2>
                    <ul>
                        <li>REACT</li>
                        <li>JAVASCRIPT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <h2>// See It In Action</h2>
                    <h3>This chrome extension using which we cansave important tabs/URLs and can open them whenever needed. Its similar to the bookmark feature in chrome.</h3>
                    <a>See the code <i class="fa-brands fa-github"></i></a>
                </div>
                <div className="project">
                    <img src="./blackjack.png"></img>
                    <h2>// Tech Stack</h2>
                    <ul>
                        <li>REACT</li>
                        <li>JAVASCRIPT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <h2>// See It In Action</h2>
                    <h3>I made this Blackjack game just to spend few hours playing it.</h3>
                    <a>See the code <i class="fa-brands fa-github"></i></a>
                </div>
                <div className="project">
                    <img src="./colorPicker.png"></img>
                    <h2>// Tech Stack</h2>
                    <ul>
                        <li>REACT</li>
                        <li>JAVASCRIPT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <h2>// See It In Action</h2>
                    <h3>I made this webpage whose background color will change randomly as you click on the "Click Me" button, and you can pick any random color you like for your project</h3>
                    <a>See the code <i class="fa-brands fa-github"></i></a>
                </div>
                <div className="project">
                    <img src="./portfolio.png"></img>
                    <h2>// Tech Stack</h2>
                    <ul>
                        <li>REACT</li>
                        <li>JAVASCRIPT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <h2>// See It In Action</h2>
                    <h3>Not much to say here! This one just gave me a good excuse to spend a weekend practicing with React and CSS</h3>
                    <a>See the code <i class="fa-brands fa-github"></i></a>
                </div>
            </section>
            <h1>{'</wrapper>'}</h1>
        </section>
    )
}

export default Projects;