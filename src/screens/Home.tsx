import { FontAwesome5 } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { Form } from '../components/Form';
import { IMCComponent } from '../components/IMCComponent';
import { IMCContext } from '../contexts/IMCContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { HomeStyles } from '../styles/screens/Home';
import { useThemeAwareObject } from '../utils/useThemeAwareObject.hook';

export default function Home() {
  const { IMC } = useContext(IMCContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const Styles = useThemeAwareObject(HomeStyles);

  return (
    <SafeAreaView style={Styles.Area}>
      <View style={Styles.Title}>
        <Text onPress={toggleTheme} style={Styles.Text}>
          ONEBITHEALTH
          {' '}
          <FontAwesome5 name="heartbeat" size={24} color={theme.colors.red} />
        </Text>
      </View>
      <View style={Styles.Main}>
        {IMC === 0 ? <Form /> : <IMCComponent />}
      </View>
    </SafeAreaView>
  );
}
