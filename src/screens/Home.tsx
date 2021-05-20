import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { InputTextInfo } from '../components/InputTextInfo';
// import { IMCContext } from '../contexts/IMCContext';
import { HomeStyles } from '../styles/Home';

export default function Home() {
  // const { handleBalance } = useContext(IMCContext);

  return (
      <SafeAreaView style={HomeStyles.Area}>
        <View style={HomeStyles.Title}>
          <Text style={HomeStyles.Text}>ONEBITHEALTH</Text>
        </View>
        <View style={HomeStyles.Main}>
          <InputTextInfo />
          <TouchableOpacity
            // onPress={handleBalance()}
            style={HomeStyles.Button}
            activeOpacity={0.6}
          >
            <Text style={HomeStyles.TextBtn}>Calculate</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}
