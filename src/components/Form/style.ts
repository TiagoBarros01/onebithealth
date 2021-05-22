import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/themes/light';

export const FormStyles = StyleSheet.create({
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
  TextWithoutResult: {
    marginTop: 40,
    fontSize: 20,
    color: Theme.colors.red
  },
})