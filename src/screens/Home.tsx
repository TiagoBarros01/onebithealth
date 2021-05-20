import React, { useContext, useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { InputTextInfo } from '../components/InputTextInfo';
import { IMCContext } from '../contexts/IMCContext';
import { HomeStyles } from '../styles/Home';

export default function Home() {
  const { handleIMC, IMC, handleIMCAgain, TexBtn, btnState } = useContext(IMCContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={HomeStyles.Area}>
        <View style={HomeStyles.Title}>
          <Text style={HomeStyles.Text}>ONEBITHEALTH 🎯</Text>
        </View>
        <View style={HomeStyles.Main}>
          <InputTextInfo />
          <TouchableOpacity
            onPress={btnState === true ? () => handleIMC() : () => handleIMCAgain()}
            style={HomeStyles.Button}
            activeOpacity={0.6}
            >
            <Text style={HomeStyles.TextBtn}>{TexBtn}</Text>
          </TouchableOpacity>
            <Text>{IMC === 0 ? '' : `Your IMC is: ${IMC.toString().replace('.',',')}`}</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
