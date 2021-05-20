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
    height: 130,
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
  IMCContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  TextWithoutResult: {
    marginTop: 40,
    fontSize: 20,
    color: Theme.colors.red
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

    backgroundColor: Theme.colors.red
  },
  TextShareBtn: {
    color: Theme.colors.white,
    fontSize: 16,
  }
});
