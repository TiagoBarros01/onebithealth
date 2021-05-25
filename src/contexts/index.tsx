import React from 'react';

import light from '../styles/themes/light';
import { AnimationContextProvider } from './AnimationContext';
import { IMCContextProvider } from './IMCContext';
import { ThemeContextProvider } from './ThemeContext';

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  return (
    <ThemeContextProvider currentTheme={light}>
      <AnimationContextProvider>
        <IMCContextProvider>{children}</IMCContextProvider>
      </AnimationContextProvider>
    </ThemeContextProvider>
  );
}
