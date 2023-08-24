import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/NavigationMenu.css';


const NavigationMenu: React.FC = () => {
return (
   
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
        <Link to="/home"><span className="icofont">&#xef47;</span> Home</Link>
        </li>
        <li className="navbar-item">
        <Link to="/aboutme"><span className="icofont">&#xed52;</span> About Me</Link>
        </li>
        <li className="navbar-item">
        <Link to="/contact"><span className="icofont">&#xe967;</span> My Projects</Link>
        </li>
        <li className="navbar-item">
        <Link to="/portfolio"><span className="icofont">&#xec50;</span> Contact</Link>
        </li>
      </ul>

      </nav>
    
  );
};

export default NavigationMenu;