import React from 'react'; // Import your CSS styles for the Home component
import me from './img/Me.jpg';
import { useLanguageContext } from '../components/LanguageProvider';


const Home = () => {
  const { language } = useLanguageContext();
  return (
    <div className="home-container">
      <div className="hero-image">
        {/* Replace 'your-image-url.jpg' with the URL or path to your image */}
        <img src={me} alt="Beautiful Landscape" />
      </div>
      <div className="home-content">
        <h1>{language === 'swedish' ? 'Välkommen till Min Hemsida' : 'Welcome to My Website'}</h1>
        <p>
        {language === 'swedish' ? 'Upptäck mitt portfolio, erfarnheter, och mer' : 'Discover my portfolio, experiences, and more'} </p>
      </div>
    </div>
  );
};

export default Home;
