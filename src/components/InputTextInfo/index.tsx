import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface Props {
  TextValue: string;
  PlaceholderValue: string;
}

export function InputTextInfo({TextValue, PlaceholderValue}: Props) {
  return (
    <View>
      <Text>{TextValue}</Text>
      <TextInput placeholder={PlaceholderValue} keyboardType="numeric" />
    </View>
  );
}
