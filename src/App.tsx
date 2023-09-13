import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Cv from './pages/Cv';
import { LanguageProvider } from './components/LanguageProvider';
import LanguageSwitcher from './components/LanguageSwitcher';
import Home from './pages/Home';


const App: React.FC = () => {
  function toggleLanguage(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <LanguageProvider initialLanguage="swedish" language='swedish' toggleLanguage={toggleLanguage}>  {/* Provide initialLanguage here */}
      <Router>
        <NavigationMenu />
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/Cv" element={<Cv />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="language-switcher-container">
            <LanguageSwitcher />
          </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;








