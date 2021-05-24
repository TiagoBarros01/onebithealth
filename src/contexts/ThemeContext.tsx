import React, { createContext, useCallback, useMemo, useState } from 'react';
import { DefaultTheme } from '../styles/themes/Theme.interface';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface Props {
  initial: DefaultTheme;
  children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: light,
  toggleTheme: () => {
    console.log(`ThemeProvider isn't rendered 😞`);
  },
});

function ThemeContextProvider({ children, initial }: Props) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.title === light.title) {
        return dark;
      } else if (currentTheme.title === dark.title) {
        return light;
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
