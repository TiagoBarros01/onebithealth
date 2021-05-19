import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { InputStyles } from './style';

interface Props {
  TextValue: string;
  PlaceholderValue: string;
}

export function InputTextInfo({TextValue, PlaceholderValue}: Props) {
  return (
    <View style={InputStyles.Container}>
      <Text style={InputStyles.Text}>{TextValue}</Text>
      <TextInput style={InputStyles.Input} placeholder={PlaceholderValue} keyboardType="numeric" />
    </View>
  );
}
