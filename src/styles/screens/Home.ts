import { StyleSheet } from 'react-native';
import { DefaultTheme } from '../themes/light';

export const HomeStyles = StyleSheet.create({
  Area: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: DefaultTheme.colors.red,
    fontSize: 25,
    fontWeight: 'bold',
  },
  Main: {
    flex: 1,
    width: '100%',
    alignItems: 'center',

    backgroundColor: DefaultTheme.colors.white,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  Button: {
    backgroundColor: DefaultTheme.colors.red,

    width: '70%',
    height: 45,
    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',
  },
  TextBtn: {
    color: DefaultTheme.colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
