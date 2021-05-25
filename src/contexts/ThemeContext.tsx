import React, { createContext, useCallback, useMemo, useState } from 'react';
import { DefaultTheme } from '../styles/themes/styled';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface Props {
  theme: DefaultTheme;
  children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: light,
  toggleTheme: () => {
    console.log(`ThemeProvider isn't rendered 😞`);
  },
});

function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      currentTheme.title === light.title
        ? dark
        : currentTheme.title === dark.title
        ? light
        : currentTheme;

      return currentTheme;
    });
  }, []);

  const memoizedValue = useMemo(() => {
    const value: ThemeContextData = {
      theme,
      toggleTheme,
    };
    return value;
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
