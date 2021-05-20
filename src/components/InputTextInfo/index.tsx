import React, { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IMCContext } from '../../contexts/IMCContext';
import { InputStyles } from './style';

export function InputTextInfo() {
  const { setHeight, setWeight } =
    useContext(IMCContext);

  return (
    <>
      <View style={InputStyles.Container}>
        <Text style={InputStyles.Text}>Height</Text>
        <TextInput
          style={InputStyles.Input}
          placeholder="Ex. 1.75"
          keyboardType="numbers-and-punctuation"
          onChangeText={setHeight}
          maxLength={4}
        />
      </View>
      <View style={InputStyles.Container}>
        <Text style={InputStyles.Text}>Weight</Text>
        <TextInput
          style={InputStyles.Input}
          placeholder="Ex. 74.70"
          keyboardType="numbers-and-punctuation"
          onChangeText={setWeight}
          maxLength={6}
        />
      </View>
    </>
  );
}
