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


const App: React.FC = () => {
  return (
    <LanguageProvider initialLanguage="swedish"> {/* Provide initialLanguage here */}
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/Cv" element={<Cv />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <LanguageSwitcher /> {/* LanguageSwitcher can access context internally */}
      </Router>
    </LanguageProvider>
  );
}

export default App;








