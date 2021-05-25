import React, { useContext } from 'react';
import {
  Animated,
  Keyboard,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AnimationContext } from '../../contexts/AnimationContext';
import { IMCContext } from '../../contexts/IMCContext';
import { HomeStyles } from '../../styles/screens/Home';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { InputTextInfo } from '../InputTextInfo';
import { FormStyles } from './style';

export function Form() {
  const {
    handleIMC, handleIMCAgain, TexBtn, btnState,
  } = useContext(IMCContext);
  const { fadeAnim } = useContext(AnimationContext);

  const Styles = useThemeAwareObject(FormStyles);
  const StylesHome = useThemeAwareObject(HomeStyles);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
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
    </Animated.View>
  );
}
