import { StyleSheet } from 'react-native';

import { DefaultTheme } from '../../styles/themes/styled';

export const IMCListStyles = (theme: DefaultTheme) => {
  const styles = StyleSheet.create({
    ListOfIMCs: {
      marginTop: 20,
      width: '100%',
      borderRadius: 15,
    },
    ListIMCContainer: {
      width: '100%',
      height: 45,

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 15,

      marginTop: 5,

      backgroundColor: theme.colors.listBackground,
    },
    ListIMCDate: {
      color: theme.colors.textColor,
      fontSize: 14,
    },
    ListIMCItem: {
      color: theme.colors.red,
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.5,
    },
    btnRemoveContainer: {
    },
    btnRemove: {
      width: 80,
      height: 45,
      backgroundColor: theme.colors.red,
      marginTop: 5,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      right: 20,
      paddingLeft: 15,
    },
  });
  return styles;
};
