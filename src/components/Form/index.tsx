import React, { useContext } from 'react';
import {
  Keyboard,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IMCContext } from '../../contexts/IMCContext';
import { HomeStyles } from '../../styles/screens/Home';
import { useThemeAwareObject } from '../../utils/ThemeAwareObject.hook';
import { InputTextInfo } from '../InputTextInfo';
import { FormStyles } from './style';

export function Form() {
  const { handleIMC, handleIMCAgain, TexBtn, btnState } =
    useContext(IMCContext);

  const Styles = useThemeAwareObject(FormStyles);
  const StylesHome = useThemeAwareObject(HomeStyles);

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <InputTextInfo />
      <View style={Styles.BtnContainer}>
        <TouchableOpacity
          onPress={
            btnState === true ? () => handleIMC() : () => handleIMCAgain()
          }
          style={StylesHome.Button}
          activeOpacity={0.6}
        >
          <Text style={StylesHome.TextBtn}>{TexBtn}</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.WarningContainer}>
        <Text style={Styles.WarningText}>
          Fill the height and weight fields
        </Text>
      </View>
    </Pressable>
  );
}
