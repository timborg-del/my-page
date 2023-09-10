import React, { createContext, useContext, useState } from 'react';

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLanguage: string; // New prop to specify the initial language
}

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialLanguage }) => {
    const [language, setLanguage] = useState(initialLanguage);
  
    const toggleLanguage = () => {
      const newLanguage = language === 'swedish' ? 'english' : 'swedish';
      setLanguage(newLanguage);
  
      // Store the selected language in localStorage
      localStorage.setItem('language', newLanguage);
    };
  
    return (
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  };

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};
