import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/NavigationMenu.css';

const NavigationMenu: React.FC = () => {
return (
   
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
        <Link to="/home">Home</Link>
        </li>
        <li className="navbar-item">
        <Link to="/aboutme">About Me</Link>
        </li>
        <li className="navbar-item">
        <Link to="/contact">My Projects</Link>
        </li>
        <li className="navbar-item">
        <Link to="/portfolio">Contact</Link>
        </li>
      </ul>

      </nav>
    
  );
};

export default NavigationMenu;