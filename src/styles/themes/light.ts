import { DefaultTheme, Theme } from './Theme.interface';

const light: DefaultTheme = {
  title: 'light',

  background: '#e0e5e5',
  textColor: '#222',
  inputColor: '#f6f6f6',

  lightBackground: '#e9e9e9',
  listBackground: '#f9f9f9',

  red: '#ff0043',
  white: '#fff',
};

export const defaultLightTheme: Theme = {
  colors: light,
}