import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/NavigationMenu.css';
import { useLanguageContext } from '../components/LanguageProvider';
 

  


const NavigationMenu: React.FC = () => {
  const { language } = useLanguageContext();
return (
   
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item">
        <Link to=""><span className="icofont">&#xef47;</span>{language === 'swedish' ? ' Hem' : ' Home'}</Link>
        </li>
        <li className="navbar-item">
        <Link to="/cv"><span className="icofont">&#xe82f;</span>{language === 'swedish' ? ' CV' : ' Resume'}</Link>
        </li>
        <li className="navbar-item">
        <Link to="/aboutme"><span className="icofont">&#xed52;</span>{language === 'swedish' ? ' Om Mig' : ' About Me'}</Link>
        </li>
        <li className="navbar-item">
        <Link to="/portfolio"><span className="icofont">&#xe967;</span>{language === 'swedish' ? ' Mina Projekt' : ' My Projects'}</Link>
        </li>
        <li className="navbar-item">
        <Link to="/contact"><span className="icofont">&#xec50;</span>{language === 'swedish' ? ' Kontakt' : ' Contact'}</Link>
        </li>
      </ul>

      </nav>
    
  );
};

export default NavigationMenu;