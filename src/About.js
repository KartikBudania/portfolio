import React from "react";

const About = () => {
  return (
    <section id="about">
      <h1>{'<wrapper id= "about">'}</h1>
      <div className="about">
        {/* <h3>I'm a Full Stack Developer who's been building industry utilized applications since my second year of college. Since then, I've worked in startups, founded a couple myself, and taken on freelance projects and consulting for clients.</h3>
        <h2>// Keep reading for more details on my experience ⬇️</h2><br/><br/> */}
        <div>
          <div>
            <h4>
              0.
              <a href="http://www.vishvasschool.com/" target="_blank">
                {" "}
                Vishvas Sr. Sec. School, Hisar
              </a>
            </h4>
            <h5>Student</h5>
            <h3>2018 - 2020</h3>
            <h3>
              I completed my high school in physics, chemistry, and mathematics
              with 80% marks & because my mathematical and logical abilities
              were quite good, I pursued a career in engineering.
            </h3>
          </div>
          <br />
          <div>
            <h4>
              1.
              <a href="http://ipu.ac.in/usict" target="_blank">
                {" "}
                USICT, GGSIPU
              </a>
            </h4>
            <h5>Student</h5>
            <h3>2020 - 2024</h3>
            <h3>
              I'm currently in college pursuing a Bachelor of Technology Degree
              in Electronics and Communications Engineering. In my sophomore
              year, we were taught about Data Structure Algorithms & Operating
              Systems, which brought me to the software engineering field as I
              found it fascinating. Therefore, I started learning Web
              Development and started making projects using Javascript and
              ReactJS which sharpened my skills.
            </h3>
          </div>
        </div>
      </div>
      <h1>{"</wrapper>"}</h1>
    </section>
  );
};
export default About;
