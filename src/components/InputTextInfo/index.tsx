import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { InputStyles } from './style';

export function InputTextInfo() {
  const [height, setHeight] = useState<string>();
  const [weight, setWeight] = useState<string>();

  return (
    <>
      <View style={InputStyles.Container}>
        <Text style={InputStyles.Text}>Height</Text>
        <TextInput
          style={InputStyles.Input}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
          maxLength={3}
        />
      </View>
      <View style={InputStyles.Container}>
        <Text style={InputStyles.Text}>Weight</Text>
        <TextInput
          style={InputStyles.Input}
          placeholder="Ex. 74.70"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          maxLength={6}
        />
      </View>
    </>
  );
}
