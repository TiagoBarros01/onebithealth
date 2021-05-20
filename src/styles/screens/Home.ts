import { StyleSheet } from 'react-native';
import { Theme } from '../themes/light';

export const HomeStyles = StyleSheet.create({
  Area: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: Theme.colors.red,
    fontSize: 25,
    fontWeight: 'bold',
  },
  Main: {
    flex: 1,
    width: '100%',
    alignItems: 'center',

    backgroundColor: Theme.colors.white,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  Button: {
    backgroundColor: Theme.colors.red,

    width: '70%',
    height: 45,
    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',
  },
  TextBtn: {
    color: Theme.colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
