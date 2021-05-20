import React, { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IMCContext } from '../../contexts/IMCContext';
import { InputStyles } from './style';

export function InputTextInfo() {
  const { setHeight, setWeight, height, weight } =
    useContext(IMCContext);

  return (
    <>
      <View style={InputStyles.Container}>
        <Text style={InputStyles.Text}>Height</Text>
        <TextInput
          style={InputStyles.Input}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height === 0 ? '' : height.toString().replace(',','.')}
          maxLength={4}
        />
      </View>
      <View style={InputStyles.Container}>
        <Text style={InputStyles.Text}>Weight</Text>
        <TextInput
          style={InputStyles.Input}
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
