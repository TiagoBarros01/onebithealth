import { StyleSheet } from 'react-native';

import { DefaultTheme } from '../../styles/themes/styled';

export const IMCStyles = (theme: DefaultTheme) => {
  const Styles = StyleSheet.create({
    IMCContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
    },
    ResultIMCContainer: {
      flexDirection: 'row',
      alignItems: 'center',

      marginBottom: 25,
    },
    TextIMC: {
      color: theme.colors.textColor,
      fontSize: 24,
      textAlign: 'center',
    },
    TextIMCResult: {
      fontWeight: 'bold',
      fontSize: 36,
      textAlign: 'center',
      color: theme.colors.red,
    },
    ShareBtn: {
      width: 75,
      height: 50,

      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: 15,
      marginLeft: 20,

      backgroundColor: theme.colors.red,
    },
    TextShareBtn: {
      color: theme.colors.white,
      fontSize: 16,
    },
    TitleList: {
      color: theme.colors.textColor,
      marginTop: 20,
      fontSize: 22,
    },
  });
  return Styles;
};
