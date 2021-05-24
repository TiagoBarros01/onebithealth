import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { IMCContext } from '../../contexts/IMCContext';
import { HomeStyles } from '../../styles/screens/Home';
import { IMCStyles } from './style';
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useThemeAwareObject } from '../../utils/ThemeAwareObject.hook';

export function IMCComponent() {
  const { handleIMC, IMC, handleIMCAgain, TexBtn, btnState, onShare, IMCList } =
    useContext(IMCContext);

  const Styles = useThemeAwareObject(IMCStyles);
  const StylesHome = useThemeAwareObject(HomeStyles);

  return (
    <View style={Styles.IMCContainer}>
      <View style={Styles.ResultIMCContainer}>
        <View>
          <Text style={Styles.TextIMC}>Your IMC is:</Text>
          <Text style={Styles.TextIMCResult}>
            {IMC.toString().replace('.', ',')}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => onShare()}
          style={Styles.ShareBtn}
          activeOpacity={0.6}
        >
          <AntDesign name="sharealt" size={26} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={btnState === true ? () => handleIMC() : () => handleIMCAgain()}
        style={StylesHome.Button}
        activeOpacity={0.6}
      >
        <Text style={StylesHome.TextBtn}>{TexBtn}</Text>
      </TouchableOpacity>
      <Text style={Styles.TitleList}>Your last IMC's results</Text>
      <FlatList
        data={IMCList}
        style={Styles.ListOfIMCs}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={Styles.ListIMCContainer}>
              <Text style={Styles.ListIMCDate}>{item.date}</Text>
              <Text style={Styles.ListIMCItem}>{item.imc}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
