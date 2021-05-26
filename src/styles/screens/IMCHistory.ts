import { StyleSheet } from 'react-native';

import { DefaultTheme } from '../themes/styled';

export const IMCHistoryStyles = (theme: DefaultTheme) => {
  const styles = StyleSheet.create({
    Wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    TitleContainer: {
      height: 130,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Title: {
      color: theme.colors.textColor,
      fontSize: 25,
      fontWeight: 'bold',
    },
    Main: {
      flex: 1,
      width: '100%',
      backgroundColor: theme.colors.scndBackground,

      justifyContent: 'center',
      alignItems: 'center',

      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 30,
    },
  });
  return styles;
};
