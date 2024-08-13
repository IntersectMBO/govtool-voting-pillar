import { createTheme } from '@mui/material/styles';

const voltaireTheme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#212a3d',
      white: '#ffffff',
    },
    primary: {
      50: '#f5f8ff',
      100: '#ebf1ff',
      200: '#b8cdff',
      300: '#85a9ff',
      400: '#5286ff',
      500: '#0034ad',
      600: '#011198',
      700: '#010e7d',
      800: '#000f33',
      900: '#00081a',
      main: '#0034ad',
      contrastText: '#ffffff',
    },
    secondary: {
      50: '#f6fcfe',
      100: '#edf9fd',
      200: '#d2f1f9',
      300: '#b1e4f2',
      400: '#39b6d5',
      500: '#1f7c98',
      600: '#20687e',
      700: '#225667',
      800: '#224b59',
      900: '#10303c',
      main: '#1f7c98',
      contrastText: '#ffffff',
    },
    success: {
      50: '#ebfaed',
      100: '#cef3d4',
      200: '#baedc2',
      300: '#85e093',
      400: '#33c74a',
      500: '#218230',
      600: '#1d722a',
      700: '#185e23',
      800: '#13491b',
      900: '#08210c',
      main: '#218230',
      contrastText: '#ffffff',
    },
    error: {
      50: '#fff0f0',
      100: '#ffd1d1',
      200: '#ffc2c2',
      300: '#ff9999',
      400: '#ff6666',
      500: '#cc0000',
      600: '#ad0000',
      700: '#940000',
      800: '#700000',
      900: '#380000',
      main: '#cc0000',
      contrastText: '#ffffff',
    },
    warning: {
      50: '#fef3eb',
      100: '#fde1ce',
      200: '#fbc9a7',
      300: '#fab484',
      400: '#f7873b',
      500: '#e76309',
      600: '#b64e07',
      700: '#803705',
      800: '#582603',
      900: '#2c1302',
      main: '#e76309',
      contrastText: '#ffffff',
    },
    lightBlue: '#d6e2ff',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#212a3d',
      secondary: '#8e908e',
      disabled: '#212a3d',
    },
    divider: '#212a3d',
  },
  typography: {
    h1: { fontSize: 33 },
    h2: { fontSize: 23 },
    h3: { fontSize: 19 },
    h4: { fontSize: 16 },
    h5: { fontSize: 14 },
    h6: { fontSize: 14 },
    title: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    subtitle1: { fontSize: 16 },
    subtitle2: { fontSize: 14 },
    body1: { fontSize: 16 },
    bodySmall: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 500,
      color: '#8e908e',
    },
    bodyMedium: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      color: '#242232',
    },
    body2: { fontSize: 14 },
    caption: { fontSize: 12 },
    overline: { fontSize: 10 },
    button: { fontSize: 14 },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: (factor: number) => `${8 * factor}px`,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '100px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0px 4px 15px 0px rgba(0, 51, 173, 0.1)',
        },
      },
    },
  },
});
voltaireTheme.shadows[1] =
  '0px 1px 2px 0px rgba(0, 51, 173, 0.08), 0px 1px 6px 1px rgba(0, 51, 173, 0.15)';
voltaireTheme.shadows[2] =
  '0px 1px 2px 0px rgba(0, 51, 173, 0.08), 0px 2px 10px 2px rgba(0, 51, 173, 0.15)';
voltaireTheme.shadows[3] =
  '0px 1px 3px 0px rgba(0, 51, 173, 0.08), 0px 4px 12px 3px rgba(0, 51, 173, 0.15)';
voltaireTheme.shadows[4] =
  '0px 2px 3px 0px rgba(0, 51, 173, 0.08), 0px 6px 14px 4px rgba(0, 51, 173, 0.15)';
voltaireTheme.shadows[5] =
  '0px 4px 4px 0px rgba(0, 51, 173, 0.08), 0px 8px 20px 6px rgba(0, 51, 173, 0.15)';
voltaireTheme.shadows[6] =
  '0px 4px 15px 0px rgba(0, 51, 173, 0.08), 0px 10px 24px 7px rgba(0, 51, 173, 0.15)';

export default voltaireTheme;
