import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'inherit',
  },
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

// export const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#034C8C',
//       contrastText: '#ffffff'
//     },
//     secondary: {
//       main: '#0F436E',
//       contrastText: '#86C6FE'
//     },
//     background: {
//       default: '#161616',
//     }
//   },
// });

// export const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#b0d9fc',
//       contrastText: '#161616'
//     },
//     secondary: {
//       main: '#ffffff',
//       contrastText: '#034C8C',
//     },
//     background: {
//       default: '#ffffff',
//     }
//   }
// });

// Consolidated theme with dynamic mode support
export const getTheme = (mode: any) => 
  createTheme({
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
            // Light mode palette
            primary: {
              main: '#b0d9fc',
              contrastText: '#161616',
            },
            secondary: {
              main: '#ffffff',
              contrastText: '#034C8C',
            },
            background: {
              default: '#ffffff',
            },
          }
        : {
            // Dark mode palette
            primary: {
              main: '#034C8C',
              contrastText: '#ffffff',
            },
            secondary: {
              main: '#0F436E',
              contrastText: '#86C6FE',
            },
            background: {
              default: '#161616',
            },
          }),
    },
    typography: {
      fontFamily: 'inherit',
    },
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
