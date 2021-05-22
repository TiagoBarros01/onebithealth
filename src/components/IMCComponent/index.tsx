import React, { useContext } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IMCContext } from '../../contexts/IMCContext';
import { HomeStyles } from '../../styles/screens/Home';
import { IMCStyles } from './style';

export function IMCComponent() {
  const { handleIMC, IMC, handleIMCAgain, TexBtn, btnState, onShare, IMCList } =
    useContext(IMCContext);

  return (
    <View style={IMCStyles.IMCContainer}>
      <View style={IMCStyles.ResultIMCContainer}>
        <Text style={IMCStyles.TextIMC}>Your IMC is:</Text>
        <Text style={IMCStyles.TextIMCResult}>
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
      <Text style={IMCStyles.TitleList}>Your last IMC's results</Text>
      <FlatList
        data={IMCList}
        style={IMCStyles.ListOfIMCs}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <View style={IMCStyles.ListIMCContainer}>
            <Text style={IMCStyles.ListIMCItem}>{item.imc}</Text>
          </View>
        )}
        // showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
