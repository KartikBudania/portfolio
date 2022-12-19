import React, { useState, useEffect } from "react";

const NavBar = () => {
    
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <a href="#">kartik.budania</a>
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