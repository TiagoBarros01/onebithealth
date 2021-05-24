import { DefaultTheme, Theme } from './Theme.interface';

const dark: DefaultTheme = {
  title: 'dark',

  background: '#111',
  textColor: '#eee',
  inputColor: '#f6f6f6',

  lightBackground: '#e9e9e9',
  listBackground: '#f9f9f9',

  red: 'blue',
  white: '#000',
};

export const defaultDarkTheme: Theme = {
  colors: dark,
}