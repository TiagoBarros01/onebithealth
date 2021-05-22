import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/themes/light';

export const FormStyles = StyleSheet.create({
  BtnContainer: {
    alignItems: 'center',
  },
  WarningContainer: {
    alignItems: 'center',
  },
  WarningText: {
    marginTop: 40,
    fontSize: 20,
    color: Theme.colors.red
  },
})