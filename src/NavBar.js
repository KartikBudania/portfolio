import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const NavBar = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [find, setFind] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href="#">
            {windowDimensions.width > 650 ? "kartik.budania" : "k.b"}
          </a>
          <button className="nav-toggle" onClick={() => setFind(!find)}>
            {find ? ".close()" : ".find()"}
          </button>
        </div>
        <div className={find ? "show-link-container" : "link-container"}>
          <ul className="links">
            <li>
              <a href="#work">.projects()</a>
            </li>
            <li>
              <a href="#about">.about()</a>
            </li>
            <li>
              <a href="#tools">.tools()</a>
            </li>
            <li>
              <a href="#contact">.contact()</a>
            </li>
            <li>
              <a href="KartikBudania-Resume.pdf" download>
                <button className="toggle-theme">DOWNLOAD RESUME</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
