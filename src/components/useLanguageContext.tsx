// useLanguageContext.tsx
import React, { ReactNode, createContext, useContext, useState } from 'react';

// Create a context for the language
const LanguageContext = createContext({
    language: 'en', // Default language
    toggleLanguage: () => {}, // Default toggleLanguage function
  });
export const LanguageProvider = ({children} : {children: ReactNode}) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sv' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};
