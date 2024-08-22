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

      <div className="download-cv">
        <p>
          {language === 'swedish' ? 'Vänligen ladda ner mitt CV i PDF här om du vill veta mer om min erfarenhet.' : 'Please download my CV in PDF here if you want to know more about my experience.'}
        </p>
        <a href="https://timsa.s3.eu-north-1.amazonaws.com/timscvo.pdf" download className="download-button">
          {language === 'swedish' ? 'Ladda ner CV' : 'Download CV'}
        </a>
      </div>
    </div>
  );
};

export default Home;
