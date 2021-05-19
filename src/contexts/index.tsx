import React from 'react';

import { IMCContextProvider } from './IMCContext';

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  return <IMCContextProvider>{children}</IMCContextProvider>;
}
