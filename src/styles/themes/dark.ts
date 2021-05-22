interface ThemeProps {
  title: string;

  colors: {
    background: string;
    textColor: string;
    inputColor: string;
    lightBackground: string;
    red: string;
    white: string;
  };
  
}

export const Theme: ThemeProps = {
  title: 'light',

  colors: {
    background: '#e0e5e5',
    textColor: '#222',
    inputColor: '#f6f6f6',

    lightBackground: '#e9e9e9',
  
    red: '#ff0043',
    white: '#fff',
  }

}