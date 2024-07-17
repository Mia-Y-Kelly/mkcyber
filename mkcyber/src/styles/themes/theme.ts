'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#000',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(0, 0, 0, 0.12)',
      // icon: '#FFF', 
    },
    primary: {
      main: '#243727',
      light: '#4a694d',
      dark: '#111d13',
      contrastText: '#F8BBD0',
    },
    secondary: {
      main: '#243727',
      light: '#4a694d',
      dark: '#111d13',
      contrastText: '#F8BBD0',
    },
    background: {
      default: '#e1eee1',   // Sets background
      paper: '#243727',     // Sets background for components
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          margin: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }
      }
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          background: 'rgba(231, 241, 231, .1)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingLeft: '2px',
          paddingRight: '2px',

        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: '#F8BBD0',
          paddingRight: '10px'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#F8BBD0',
        }
      }
    },
  },
});

export default theme;
