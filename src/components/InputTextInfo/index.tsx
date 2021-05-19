import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { InputStyles } from './style';

interface Props {
  TextValue: string;
  PlaceholderValue: string;
  maxLengthValue: number;
}

export function InputTextInfo({
  TextValue,
  PlaceholderValue,
  maxLengthValue,
}: Props) {
  const [InputValue, setInputValue] = useState<string>();

  return (
    <View style={InputStyles.Container}>
      <Text style={InputStyles.Text}>{TextValue}</Text>
      <TextInput
        style={InputStyles.Input}
        placeholder={PlaceholderValue}
        keyboardType="numeric"
        value={InputValue}
        onChangeText={setInputValue}
        maxLength={maxLengthValue}
      />
    </View>
  );
}
