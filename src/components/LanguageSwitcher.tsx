import React, { useState } from 'react';
import { useLanguageContext } from './LanguageProvider'; // Make sure to import it correctly
import './css/NavigationMenu.css'; // Import your CSS file

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguageContext();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='flag-div'>
      <button
        onClick={() => {
          handleClick();
          toggleLanguage();
        }}
        title={language === 'english' ? 'Byt till svenska' : 'Switch to English'}
        className={`language-button ${isClicked ? 'clicked' : ''}`}
      >
        <span className="flag-icon">
          {language === 'english' ? '🇸🇪' : '🇬🇧'}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;





