import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/themes/light';

export const IMCStyles = StyleSheet.create({
  IMCContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  ResultIMCContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  TextResultIMC: {
    fontSize: 24,
    textAlign: 'center',
  },
  ResultIMCValue: {
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    color: Theme.colors.red,

    marginTop: 10,
    marginBottom: 20,
  },
  ShareBtn: {
    width: 110,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 20,

    backgroundColor: Theme.colors.red,
  },
  TextShareBtn: {
    color: Theme.colors.white,
    fontSize: 16,
  },
  TextList: {
    marginTop: 20,
    fontSize: 22,
  },
})