import { format } from 'date-fns/esm';
import { enUS } from 'date-fns/locale';
import React, {
  createContext, useCallback, useContext, useMemo, useRef, useState,
} from 'react';
import {
  Alert, Keyboard, Share, Vibration,
} from 'react-native';

import { AnimationContext } from './AnimationContext';

interface IMCContextData {
  handleIMC: () => void;
  handleIMCAgain: () => void;
  setWeight: (value: number) => void;
  setHeight: (value: number) => void;
  onShare: () => void;
  weight: number;
  height: number;
  IMC: number;
  TexBtn: string;
  btnState: boolean;
  IMCList: any[];
}
interface Props {
  children: React.ReactNode;
}

const IMCContext = createContext<IMCContextData>({} as IMCContextData);

function IMCContextProvider({ children }: Props) {
  const { fadeIn, fadeOut } = useContext(AnimationContext);

  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [TexBtn, setTexBtn] = useState<string>('Calculate');
  const [btnState, setBtnState] = useState<boolean>(true);
  const [IMC, setIMC] = useState<number>(0);
  const [IMCList, setIMCList] = useState<any[]>([]);
  const [IMCId, setIMCId] = useState<number>(0);

  const handleId = useCallback(() => {
    setIMCId((prevState) => prevState + 1);
  }, [IMCId]);

  const handleIMC = useCallback(() => {
    if (weight >= 30 && weight <= 200 && height >= 1 && height <= 2.2) {
      fadeOut();
      handleId();
      const totalIMC = Number((weight / (height * height)).toFixed(2));
      setIMCList((arr) => [
        ...arr,
        {
          date: format(new Date(), 'EEEEEE, d MMM', { locale: enUS }),
          id: IMCId.toString(),
          imc: totalIMC,
        },
      ]);
      setTimeout(() => {
        fadeIn();
        setIMC(totalIMC);
        setBtnState(false);
        setTexBtn('Calculate again');
      }, 250);

      Keyboard.dismiss();
    } else if (weight === 0 && height === 0) {
      Alert.alert('Insert the datas on the fields 😅');
      Vibration.vibrate();
    } else {
      Alert.alert(
        'Weight data must be greater than 30 and Height must be greater than 1.00❗',
      );
    }
  }, [weight, height, IMC, btnState, TexBtn, IMCList]);

  const handleIMCAgain = useCallback(() => {
    fadeOut();
    setTimeout(() => {
      fadeIn();
      setBtnState(true);
      setTexBtn('Calculate');
      setWeight(0);
      setHeight(0);
      setIMC(0);
    }, 250);
  }, [weight, height, IMC, btnState, TexBtn]);

  const onShare = useCallback(async () => {
    await Share.share({
      message: `Today my IMC is: ${IMC}`,
    });
  }, [IMC]);

  const memoizedValue = useMemo(() => {
    const value: IMCContextData = {
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
    };
    return value;
  }, [
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
  ]);

  return (
    <IMCContext.Provider value={memoizedValue}>{children}</IMCContext.Provider>
  );
}

export { IMCContext, IMCContextProvider };
