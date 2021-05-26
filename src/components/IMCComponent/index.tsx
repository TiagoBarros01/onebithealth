import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import {
  Animated, Text, TouchableOpacity, View,
} from 'react-native';

import { AnimationContext } from '../../contexts/AnimationContext';
import { IMCContext } from '../../contexts/IMCContext';
import { HomeStyles } from '../../styles/screens/Home';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { IMCFlatList } from '../IMCFlatList';
import { IMCStyles } from './style';

export function IMCComponent() {
  const {
    handleIMC, IMC, handleIMCAgain, TexBtn, btnState, onShare, IMCList,
  } = useContext(IMCContext);

  const { fadeAnim } = useContext(AnimationContext);

  const Styles = useThemeAwareObject(IMCStyles);
  const StylesHome = useThemeAwareObject(HomeStyles);

  return (
    <Animated.View style={[Styles.IMCContainer, { opacity: fadeAnim }]}>
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
      <Text style={Styles.TitleList}>Your last IMC&apos;s results</Text>
      <IMCFlatList />
    </Animated.View>
  );
}
