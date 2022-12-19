import React, { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

const NavBar = () => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log(windowDimensions)
    
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <a href="#">{windowDimensions.width>700 ? "kartik.budania": "k.b"}</a>
                    <button className="nav-toggle">.find()</button>
                </div>
                <div className="link-container">
                    <ul>
                        <li><a>.projects()</a></li>
                        <li><a>.about()</a></li>
                        <li><a>.tools()</a></li>
                        <li><a>.contact()</a></li>
                    </ul>
                    <button className="toggle-theme">DARK THEME</button>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;