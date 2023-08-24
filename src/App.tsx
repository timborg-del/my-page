import './App.css';
import React from 'react';
import './components/css/NavigationMenu.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationMenu/>
      <Routes>
      <Route path="/"  Component={Home} />
      <Route path="/aboutme"  Component={AboutMe} />
      <Route path="/portfolio" Component={Portfolio} />
      <Route path="/contact"  Component={Contact} />
      </Routes>
    </Router>

  );
}

export default App;
