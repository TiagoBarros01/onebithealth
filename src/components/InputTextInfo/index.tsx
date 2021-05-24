import React, { useContext, useMemo, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IMCContext } from '../../contexts/IMCContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { InputStyles } from './style';

export function InputTextInfo() {
  const { setHeight, setWeight, height, weight } =
    useContext(IMCContext);
  const { theme } = useContext(ThemeContext)

    const Styles = useMemo(() => InputStyles(theme), [theme])

  return (
    <>
      <View style={Styles.Container}>
        <Text style={Styles.Text}>Height</Text>
        <TextInput
          style={Styles.Input}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height === 0 ? '' : height.toString().replace(',','.')}
          maxLength={4}
        />
      </View>
      <View style={Styles.Container}>
        <Text style={Styles.Text}>Weight</Text>
        <TextInput
          style={Styles.Input}
          placeholder="Ex. 74.70"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight === 0 ? '' : weight.toString().replace(',','.')}
          maxLength={6}
        />
      </View>
    </>
  );
}
