import React, { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface IMCContextData {
  IMCCalculator: (weight: number, height: number) => void;
  IMC: unknown;
}

const IMCContext = createContext<IMCContextData>({} as IMCContextData);

function IMCContextProvider({ children }: Props) {
  const [IMC, setIMC] = useState();

  function IMCCalculator(weight: number, height: number) {
    setIMC(Math.round(weight/(height*height)))
  }

  return (
    <IMCContext.Provider value={{ IMCCalculator, IMC }}>
      {children}
    </IMCContext.Provider>
  )
}

export { IMCContext, IMCContextProvider } 