import React from "react";

const Tools = () => {
  return (
    <section id="tools">
      <h1>{'<wrapper id= "tools">'}</h1>
      <div className="tools">
        <h2>
          // I like to think I'm language agnostic, but here are some of my
          favorite tools right now
        </h2>
        <div className="tool">
          <div>
            <h5>Front-End Technology</h5>
            <h3>ReactJS</h3>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>WordPress</h3>
            <h3>Javascript</h3>
            {/* <h3>React Testing Library</h3> */}
          </div>
          <div>
            <h5>Other</h5>
            {/* <h3>Tailwind</h3> */}
            <h3>C++</h3>
            <h3>JAVA</h3>
            {/* <h3>Styled Components</h3> */}
            <h3>Data Structures & Algorithms</h3>
            {/* <h3>Best Practices & Design Principles Nerd</h3> */}
          </div>
        </div>
      </div>
      <h1>{"</wrapper>"}</h1>
    </section>
  );
};

export default Tools;
