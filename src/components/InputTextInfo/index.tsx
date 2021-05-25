import React, { useContext } from 'react';
import { Text, TextInput, View } from 'react-native';

import { IMCContext } from '../../contexts/IMCContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { InputStyles } from './style';

export function InputTextInfo() {
  const {
    setHeight, setWeight, height, weight,
  } = useContext(IMCContext);
  const { theme } = useContext(ThemeContext);

  const Styles = useThemeAwareObject(InputStyles);

  return (
    <>
      <View style={Styles.Container}>
        <Text style={Styles.Text}>Height</Text>
        <TextInput
          style={Styles.Input}
          placeholder="Ex. 1.75"
          placeholderTextColor={theme.colors.erasedText}
          keyboardAppearance={theme.title === 'light' ? 'light' : 'dark'}
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height === 0 ? '' : height.toString().replace(',', '.')}
          maxLength={4}
        />
      </View>
      <View style={Styles.Container}>
        <Text style={Styles.Text}>Weight</Text>
        <TextInput
          style={Styles.Input}
          placeholder="Ex. 74.70"
          placeholderTextColor={theme.colors.erasedText}
          keyboardAppearance={theme.title === 'light' ? 'light' : 'dark'}
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight === 0 ? '' : weight.toString().replace(',', '.')}
          maxLength={6}
        />
      </View>
    </>
  );
}
