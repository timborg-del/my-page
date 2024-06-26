import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguageContext } from '../components/LanguageProvider';
import './css/NavigationMenu.css';


const NavigationMenu: React.FC = () => {
  const { language } = useLanguageContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateCircle, setAnimateCircle] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setAnimateCircle(true); // Trigger circle animation
    setTimeout(() => {
      setAnimateCircle(false);
    }, 500); // Duration of animation
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <button className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className={`menu-icon ${menuOpen ? 'hide' : ''}`}>&#9776;</span>
        <span className={`close-icon ${menuOpen ? 'show' : ''}`}>&times;</span>
        <div className={`circle ${menuOpen ? 'show' : ''} ${animateCircle ? 'animate-border' : ''}`}></div>
      </button>

      <ul className={`navbar-list ${menuOpen ? 'active show' : ''}`}>
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









