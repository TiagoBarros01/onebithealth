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
  const { handleIMC, IMC, handleIMCAgain, TexBtn, btnState, onShare } =
    useContext(IMCContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={HomeStyles.Area}>
        <View style={HomeStyles.Title}>
          <Text style={HomeStyles.Text}>ONEBITHEALTH 🎯</Text>
        </View>
        <View style={HomeStyles.Main}>
          {IMC === 0 ? (
            <>
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
              <Text style={HomeStyles.TextWithoutResult}>
                Fill the height and weight fields
              </Text>
            </>
          ) : (
            <View style={HomeStyles.IMCContainer}>
              <View style={HomeStyles.ResultIMCContainer}>
                <Text style={HomeStyles.TextResultIMC}>Your IMC is:</Text>
                <Text style={HomeStyles.ResultIMCValue}>
                  {IMC.toString().replace('.', ',')}
                </Text>
                <TouchableOpacity
                  onPress={() => onShare()}
                  style={HomeStyles.ShareBtn}
                  activeOpacity={0.6}
                >
                  <Text style={HomeStyles.TextShareBtn}>Share 🤩</Text>
                </TouchableOpacity>
              </View>
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
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
