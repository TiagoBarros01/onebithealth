import React, { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}
interface IMCContextData {
  handleIMC: () => void;
  setWeight: any;
  setHeight: any;
}

const IMCContext = createContext<IMCContextData>({} as IMCContextData);

function IMCContextProvider({ children }: Props) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [IMC, setIMC] = useState();

  function handleIMC() {
    console.log(Math.round(weight / (height * height)));
  }

  return (
    <IMCContext.Provider
      value={{ handleIMC, setWeight, setHeight }}
    >
      {children}
    </IMCContext.Provider>
  );
}

export { IMCContext, IMCContextProvider };
