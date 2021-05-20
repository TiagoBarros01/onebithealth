import React, { createContext, useState } from 'react';
import { Alert, Keyboard, Share, Vibration } from 'react-native';

interface Props {
  children: React.ReactNode;
}
interface IMCContextData {
  handleIMC: () => void;
  handleIMCAgain: () => void;
  setWeight: () => number;
  setHeight: () => number;
  onShare: () => void;
  weight: number;
  height: number;
  IMC: number;
  TexBtn: string;
  btnState: boolean;
  IMCList: any[];
}

const IMCContext = createContext<IMCContextData>({} as IMCContextData);

function IMCContextProvider({ children }: Props) {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [TexBtn, setTexBtn] = useState<string>('Calculate');
  const [btnState, setBtnState] = useState<boolean>(true);
  const [IMC, setIMC] = useState<number>(0);
  const [IMCList, setIMCList] = useState<any[]>([]);

  function handleIMC() {
    if (weight >= 30 && weight <= 200 && height >= 1 && height <= 2.2) {
      let totalIMC = Number((weight / (height * height)).toFixed(2));
      setIMCList((arr) => [
        ...arr,
        { id: new Date().getTime(), imc: totalIMC },
      ]);
      setIMC(totalIMC)

      setBtnState(false);
      setTexBtn('Calculate again');
      Keyboard.dismiss();
    } else if (weight === 0 && height === 0) {
      Alert.alert('Insert the datas on the fields 😅');
      Vibration.vibrate();
    } else {
      Alert.alert(
        'Weight data must be greater than 30 and Height must be greater than 1.00❗'
      );
    }
  }

  function handleIMCAgain() {
    setBtnState(true);
    setTexBtn('Calculate');
    setWeight(0);
    setHeight(0);
    setIMC(0);
  }

  async function onShare() {
    const res = await Share.share({
      message: `Today my IMC is: ${IMC}`,
    });
  }

  return (
    <IMCContext.Provider
      value={{
        handleIMC,
        handleIMCAgain,
        onShare,
        setWeight,
        setHeight,
        weight,
        height,
        IMC,
        TexBtn,
        btnState,
        IMCList,
      }}
    >
      {children}
    </IMCContext.Provider>
  );
}

export { IMCContext, IMCContextProvider };
