import React, { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Form } from '../components/Form';
import { IMCComponent } from '../components/IMCComponent';
import { IMCContext } from '../contexts/IMCContext';
import { HomeStyles } from '../styles/screens/Home';

export default function Home() {
  const { IMC } = useContext(IMCContext);

  return (
    <SafeAreaView style={HomeStyles.Area}>
      <View style={HomeStyles.Title}>
        <Text style={HomeStyles.Text}>ONEBITHEALTH 🎯</Text>
      </View>
      <View style={HomeStyles.Main}>
        {IMC === 0 ? <Form /> : <IMCComponent />}
      </View>
    </SafeAreaView>
  );
}
