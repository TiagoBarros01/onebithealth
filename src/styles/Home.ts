import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
  Area: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Main: {
    flex: 1,
    width: '100%',
    alignItems: 'center',

    backgroundColor: '#fff',

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  Button: {
    backgroundColor: 'red',

    width: '70%',
    height: 45,
    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',
  },
  TextBtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
