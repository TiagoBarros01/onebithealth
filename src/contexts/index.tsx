import React from 'react';
import { defaultLightTheme } from '../styles/themes/light';

import { IMCContextProvider } from './IMCContext';
import { ThemeContextProvider } from './ThemeContext';

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  return (
    <ThemeContextProvider initial={defaultLightTheme} >
      <IMCContextProvider>{children}</IMCContextProvider>
    </ThemeContextProvider>
  );
}
