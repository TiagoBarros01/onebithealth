import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { HomeStyles } from '../styles/Home';

export default function Home() {
  return (
    <SafeAreaView style={HomeStyles.Area}>
      <View>
        <Text>ONEBITHEALTH</Text>
      </View>
    </SafeAreaView>
  );
}
