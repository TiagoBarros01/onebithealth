import { StyleSheet } from 'react-native';
import { Theme } from '../themes/Theme.interface';

export const HomeStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    Area: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Title: {
      height: 130,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      color: theme.colors.red,
      fontSize: 25,
      fontWeight: 'bold',
    },
    Main: {
      flex: 1,
      width: '100%',

      backgroundColor: theme.colors.white,

      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 30,
    },
    Button: {
      backgroundColor: theme.colors.red,

      width: '70%',
      height: 45,
      borderRadius: 15,

      alignItems: 'center',
      justifyContent: 'center',
    },
    TextBtn: {
      color: theme.colors.white,
      fontWeight: 'bold',
      fontSize: 14,
    },
  });
  return styles;
};
