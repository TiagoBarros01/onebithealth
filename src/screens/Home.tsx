import React, { useContext } from 'react';
import {
  FlatList,
  Keyboard,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Form } from '../components/Form';
import { InputTextInfo } from '../components/InputTextInfo';
import { IMCContext } from '../contexts/IMCContext';
import { HomeStyles } from '../styles/screens/Home';

export default function Home() {
  const { handleIMC, IMC, handleIMCAgain, TexBtn, btnState, onShare, IMCList } =
    useContext(IMCContext);

  return (
    <Pressable onPress={Keyboard.dismiss} style={HomeStyles.Area}>
      <View style={HomeStyles.Title}>
        <Text style={HomeStyles.Text}>ONEBITHEALTH 🎯</Text>
      </View>
      <View style={HomeStyles.Main}>
        {IMC === 0 ? (
          <Form />
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
            <Text style={HomeStyles.TextList}>Your last IMC's results</Text>
            <FlatList
              data={IMCList.reverse()}
              keyExtractor={(item: any) => item.id}
              renderItem={({ item }) => (
                <View>
                  <Text>{item.imc}</Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
}
