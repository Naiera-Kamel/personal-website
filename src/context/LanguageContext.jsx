import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext({
  language: 'ar', 
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'ar';
  });

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    localStorage.setItem('language', language);
    const root = window.document.documentElement;
    
    root.dir = language === 'ar' ? 'rtl' : 'ltr';

  }, [language]);

  const contextValue = { language, toggleLanguage };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};