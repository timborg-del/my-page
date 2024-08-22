import React from 'react'; // Import your CSS styles for the Home component
import me from './img/Me1.jpg';
import { useLanguageContext } from '../components/LanguageProvider';


const Home = () => {
  const { language } = useLanguageContext();
  return (
    <div className="home-container">
      <div className="hero-image">
        <img src={me} alt="Beautiful Landscape" className='me' />
      </div>
      <div className="home-content">
        <h1>{language === 'swedish' ? 'Välkommen!' : 'Welcome!'}</h1>
        <p>
        {language === 'swedish' ? 'Upptäck mitt portfolio, erfarnheter, och mer' : 'Discover my portfolio, experiences, and more'}</p>
      </div>
    </div>
  );
};

export default Home;
