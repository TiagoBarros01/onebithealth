import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { IMCFlatList } from '../components/IMCFlatList';
import { IMCHistoryStyles } from '../styles/screens/IMCHistory';
import { useThemeAwareObject } from '../utils/useThemeAwareObject.hook';

export default function IMCHistory() {
  const Styles = useThemeAwareObject(IMCHistoryStyles);

  return (
    <SafeAreaView style={Styles.Wrapper}>
      <View style={Styles.TitleContainer}>
        <Text style={Styles.Title}>List of my IMC&apos;s</Text>
      </View>
      <View style={Styles.Main}>
        <View style={Styles.TopBarList}>
          <Text style={Styles.TopBarListText}>ID</Text>
          <Text style={[Styles.TopBarListText, { marginRight: 15 }]}>Date</Text>
          <Text style={Styles.TopBarListText}>Value</Text>
        </View>
        <IMCFlatList />
      </View>
    </SafeAreaView>
  );
}
