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
import { InputTextInfo } from '../InputTextInfo';
import { FormStyles } from './style';

export function Form() {
  const { handleIMC, handleIMCAgain, TexBtn, btnState } =
    useContext(IMCContext);

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <InputTextInfo />
      <View style={FormStyles.BtnContainer}>
        <TouchableOpacity
          onPress={
            btnState === true ? () => handleIMC() : () => handleIMCAgain()
          }
          style={HomeStyles.Button}
          activeOpacity={0.6}
        >
          <Text style={HomeStyles.TextBtn}>{TexBtn}</Text>
        </TouchableOpacity>
      </View>
      <View style={FormStyles.WarningContainer}>
        <Text style={FormStyles.WarningText}>
          Fill the height and weight fields
        </Text>
      </View>
    </Pressable>
  );
}
