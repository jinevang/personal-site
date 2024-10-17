import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#034C8C',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#0F436E',
      contrastText: '#86C6FE'
    },
    background: {
      default: '#272626',
    }
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b0d9fc',
      contrastText: '#111110'
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#034C8C',
    },
    background: {
      default: '#ffffff',
    }
  }
});