import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

interface Props {
  children: React.ReactNode;
}
interface IMCContextData {
  handleIMC: () => void;
  handleIMCAgain: () => void;
  setWeight: any;
  setHeight: any;
  weight: any;
  height: any;
  IMC: number;
  TexBtn: string;
  btnState: boolean;
}

const IMCContext = createContext<IMCContextData>({} as IMCContextData);

function IMCContextProvider({ children }: Props) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [TexBtn, setTexBtn] = useState('Calculate');
  const [btnState, setBtnState] = useState<boolean>(true);
  const [IMC, setIMC] = useState(0);

  function handleIMC() {
    if (weight && height !== 0) {
      setIMC((weight / (height * height)).toFixed(2));
      setBtnState(false)
      setTexBtn('Calculate again');
    } else {
      Alert.alert('Insert the datas on the fields 😅')
    }
  }

  function handleIMCAgain() {
    setBtnState(true)
    setTexBtn('Calculate');
    setWeight(0);
    setHeight(0);
    setIMC(0)
  }

  return (
    <IMCContext.Provider
      value={{
        handleIMC,
        handleIMCAgain,
        setWeight,
        setHeight,
        weight,
        height,
        IMC,
        TexBtn,
        btnState
      }}
    >
      {children}
    </IMCContext.Provider>
  );
}

export { IMCContext, IMCContextProvider };
