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
  TextIMC: {
    fontSize: 24,
    textAlign: 'center',
  },
  TextIMCResult: {
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
  TitleList: {
    marginTop: 20,
    fontSize: 22,
  },
  ListOfIMCs: {
    marginTop: 20,
    width: '100%',
  },
  ListIMCContainer: {
    width: '100%',
    height: 50,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,

    marginTop: 5,

    backgroundColor: Theme.colors.background
  },
  ListIMCItem: {
    color: Theme.colors.red,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: .5,
  }
})