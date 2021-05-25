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
      marginTop: 20,
      fontSize: 22,
    },
    ListOfIMCs: {
      marginTop: 20,
      width: '100%',
      backgroundColor: theme.colors.listBackground,
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

      backgroundColor: theme.colors.lightBackground,
    },
    ListIMCDate: {
      fontSize: 14,
    },
    ListIMCItem: {
      color: theme.colors.red,
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.5,
    },
  });
  return Styles;
};
