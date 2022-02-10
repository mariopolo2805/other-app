import React, { useState } from "react";

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const store = {
    theme,
    changeTheme,
  };

  return <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>;
}