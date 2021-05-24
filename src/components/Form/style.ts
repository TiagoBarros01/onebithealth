import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/themes/Theme.interface';

export const FormStyles = (theme: Theme) => {
  const Styles = StyleSheet.create({
    BtnContainer: {
      alignItems: 'center',
    },
    WarningContainer: {
      alignItems: 'center',
    },
    WarningText: {
      marginTop: 40,
      fontSize: 20,
      color: theme.colors.red,
    },
  });
  return Styles;
};
