import React from 'react';
import { defaultDarkTheme } from '../styles/themes/dark';

import { IMCContextProvider } from './IMCContext';
import { ThemeContextProvider } from './ThemeContext';

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  return (
    <ThemeContextProvider initial={defaultDarkTheme} >
      <IMCContextProvider>{children}</IMCContextProvider>
    </ThemeContextProvider>
  );
}
