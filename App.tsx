import React from 'react';

import ContextProvider from './src/contexts';
import Home from './src/screens/Home';

export default function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}
