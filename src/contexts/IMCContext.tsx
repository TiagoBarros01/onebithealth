import React, { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}
interface IMCContextData {
  handleIMC: () => void;
  setWeight: any;
  setHeight: any;
  IMC: number;
}

const IMCContext = createContext<IMCContextData>({} as IMCContextData);

function IMCContextProvider({ children }: Props) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [IMC, setIMC] = useState(0);

  function handleIMC() {
    setIMC(Math.round(weight / (height * height)));
  }

  return (
    <IMCContext.Provider
      value={{ handleIMC, setWeight, setHeight, IMC }}
    >
      {children}
    </IMCContext.Provider>
  );
}

export { IMCContext, IMCContextProvider };
