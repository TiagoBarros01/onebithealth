import { Feather } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { FlatList, RectButton, Swipeable } from 'react-native-gesture-handler';

import { IMCContext } from '../../contexts/IMCContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { IMCListStyles } from './style';

export function IMCFlatList() {
  const { IMCList } = useContext(IMCContext);
  const { theme } = useContext(ThemeContext);

  const Styles = useThemeAwareObject(IMCListStyles);

  return (
    <>
      <FlatList
        data={IMCList}
        style={Styles.ListOfIMCs}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item, index }) => (
          <Swipeable
            overshootRight={false}
            renderRightActions={() => (
              <View>
                <View style={Styles.btnRemoveContainer}>
                  <RectButton style={Styles.btnRemove}>
                    <Feather name="trash" size={16} color={theme.colors.scndBackground} />
                  </RectButton>
                </View>
              </View>
            )}
          >
            <View style={Styles.ListIMCContainer}>
              <Text style={Styles.ListIMCDate}>{index + 1}</Text>
              <Text style={Styles.ListIMCDate}>{item.date}</Text>
              <Text style={Styles.ListIMCItem}>{item.imc}</Text>
            </View>
          </Swipeable>

        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}
