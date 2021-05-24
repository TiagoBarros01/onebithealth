import { ColorTheme, Theme } from './Theme.interface';

const defaultDarkColorTheme: ColorTheme = {
  title: 'dark',

  background: '#111',
  textColor: '#eee',
  inputColor: '#f6f6f6',

  lightBackground: '#e9e9e9',
  listBackground: '#f9f9f9',

  red: 'blue',
  white: '#000',
};

export const defaultDarkThemeId = 'dark';

export const defaultDarkTheme: Theme = {
  id: defaultDarkThemeId,
  colors: defaultDarkColorTheme,
}