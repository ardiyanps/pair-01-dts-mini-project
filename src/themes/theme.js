import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#37474f',
      light: '#b0bec5',
      dark: '#455a64',
      contrastText: '#d5d5d5',
    },
    secondary: {
      main: '#fbc02d',
      light: '#fff176',
      dark: '#ffee58',
      contrastText: '#263238',
    },
    background: {
      default: '#78909c',
      paper: '#eeeeee',
    },
  },
  typography: {
    fontSize: 12,
    fontWeightLight: 300,
    htmlFontSize: 16,
    fontFamily: 'Roboto',
  },
});

export default theme;
