export interface ColorTheme {
  title: string;

  background: string;
  textColor: string;
  inputColor: string;
  lightBackground: string;
  listBackground: string;
  red: string;
  white: string;
}

export interface Theme {
  id: string,
  colors: ColorTheme,
}
