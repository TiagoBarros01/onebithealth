import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { IMCContext } from '../../contexts/IMCContext';
import { HomeStyles } from '../../styles/screens/Home';
import { IMCStyles } from './style';

export function IMCComponent() {
  const { handleIMC, IMC, handleIMCAgain, TexBtn, btnState, onShare, IMCList } =
    useContext(IMCContext);

  return (
    <View style={IMCStyles.IMCContainer}>
      <View style={IMCStyles.ResultIMCContainer}>
        <Text style={IMCStyles.TextResultIMC}>Your IMC is:</Text>
        <Text style={IMCStyles.ResultIMCValue}>
          {IMC.toString().replace('.', ',')}
        </Text>
        <TouchableOpacity
          onPress={() => onShare()}
          style={IMCStyles.ShareBtn}
          activeOpacity={0.6}
        >
          <Text style={IMCStyles.TextShareBtn}>Share 🤩</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={btnState === true ? () => handleIMC() : () => handleIMCAgain()}
        style={HomeStyles.Button}
        activeOpacity={0.6}
      >
        <Text style={HomeStyles.TextBtn}>{TexBtn}</Text>
      </TouchableOpacity>
      <Text style={IMCStyles.TextList}>Your last IMC's results</Text>
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
  );
}
