import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { IMCContext } from '../../contexts/IMCContext';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { IMCListStyles } from './style';

export function IMCFlatList() {
  const { IMCList } = useContext(IMCContext);

  const Styles = useThemeAwareObject(IMCListStyles);

  return (
    <>
      <FlatList
        data={IMCList}
        style={Styles.ListOfIMCs}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={Styles.ListIMCContainer}>
            <Text style={Styles.ListIMCDate}>{item.id}</Text>
            <Text style={Styles.ListIMCDate}>{item.date}</Text>
            <Text style={Styles.ListIMCItem}>{item.imc}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}
