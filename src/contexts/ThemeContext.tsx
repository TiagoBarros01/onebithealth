/* eslint-disable react/no-unused-prop-types */
import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import { DefaultTheme } from '../styles/themes/styled';

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface Props {
  theme: DefaultTheme;
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: light,
  toggleTheme: () => {
    console.log("ThemeProvider isn't rendered 😞");
  },
});

function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.title === light.title) {
        return dark;
      } if (currentTheme.title === dark.title) {
        return light;
      }
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
