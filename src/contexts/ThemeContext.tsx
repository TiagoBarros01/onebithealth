import React, { createContext, useCallback, useMemo, useState } from 'react';
import { Theme } from '../styles/themes/Theme.interface';
import { defaultLightTheme } from '../styles/themes/light';
import { defaultDarkTheme } from '../styles/themes/dark';

interface ThemeContextData {
  theme: Theme;
  toggleTheme: () => void;
}

interface Props {
  initial: Theme;
  children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: defaultDarkTheme,
  toggleTheme: () => {
    console.log(`ThemeProvider isn't rendered 😞`);
  },
});

function ThemeContextProvider({ children, initial }: Props) {
  const [theme, setTheme] = useState<Theme>(initial);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.colors.title === defaultLightTheme.colors.title) {
        return defaultDarkTheme;
      } else if (currentTheme.colors.title === defaultDarkTheme.colors.title) {
        return defaultLightTheme;
      }

      return currentTheme;
    });
  }, []);

  const MemoizedValue = useMemo(() => {
    const value: ThemeContextData = {
      theme,
      toggleTheme: toggleTheme,
    };
    return value;
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
