import React, { useContext } from 'react';
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
import { HomeStyles } from '../styles/screens/Home';

export default function Home() {
  const { handleIMC, IMC, handleIMCAgain, TexBtn, btnState } =
    useContext(IMCContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={HomeStyles.Area}>
        <View style={HomeStyles.Title}>
          <Text style={HomeStyles.Text}>ONEBITHEALTH 🎯</Text>
        </View>
        <View style={HomeStyles.Main}>
          <InputTextInfo />
          <TouchableOpacity
            onPress={
              btnState === true ? () => handleIMC() : () => handleIMCAgain()
            }
            style={HomeStyles.Button}
            activeOpacity={0.6}
          >
            <Text style={HomeStyles.TextBtn}>{TexBtn}</Text>
          </TouchableOpacity>
          <View style={HomeStyles.IMCContainer}>
            {IMC === 0 ? (
              <Text style={HomeStyles.TextWithoutResult}>
                Fill the height and weight fields
              </Text>
            ) : (
              <View style={HomeStyles.ResultIMCContainer}>
                <Text style={HomeStyles.TextResultIMC} >Your IMC is:</Text>
                <Text style={HomeStyles.ResultIMCValue}>
                  {IMC.toString().replace('.', ',')}
                </Text>
                <TouchableOpacity style={HomeStyles.ShareBtn} activeOpacity={.6} >
                  <Text style={HomeStyles.TextShareBtn}>Share 🤩</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
