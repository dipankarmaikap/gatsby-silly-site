import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const defaultState = [];

export const ThemeContext = createContext(defaultState);

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("DarkMode", false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
