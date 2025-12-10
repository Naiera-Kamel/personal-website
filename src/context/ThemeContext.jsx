import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: 'light', 
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    
    return localStorage.getItem('theme') || 'light'; 
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log(`[Theme] User toggled theme to: ${newTheme}`); 
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light'); 
    } 
    else {
      root.classList.remove('dark');
      root.classList.add('light'); 
    }
    
  }, [theme]);

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};