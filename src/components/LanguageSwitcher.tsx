// LanguageSwitcher.tsx
import React from 'react';
import { useLanguageContext } from './LanguageProvider'; // Make sure to import it correctly

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguageContext();

  return (
    <button
      onClick={toggleLanguage}
      title={language === 'english' ? 'Byt till svenska' : 'Switch to English'}
      className={`language-button ${language === 'swedish' ? 'swedish' : 'english'}`}
    >
      {language === 'english' ? <span style={{ fontSize: '32px' }}>🇸🇪</span> : <span style={{ fontSize: '32px' }}>🇬🇧</span>}
    </button>
  );
};

export default LanguageSwitcher;




