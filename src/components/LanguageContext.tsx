import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the language
type Language = 'swedish' | 'english';

// Define the shape of the context
interface LanguageContextProps {
  children?: React.ReactNode;
  language: Language;
  toggleLanguage: () => void;
  initialLanguage: Language; // Add initialLanguage to the context interface
}

// Create the language context
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Custom hook to use the language context
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};

// LanguageProvider component
export const LanguageProvider: React.FC<{ initialLanguage: Language }> = ({ children, initialLanguage }) => {
  // Define and initialize the language state
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // Function to toggle the language
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'swedish' ? 'english' : 'swedish'));
  };

  // Create the context value
  const contextValue = {
    language,
    toggleLanguage,
    initialLanguage, // Pass initialLanguage in the context
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
