'use client';
import { createTheme } from '@mui/material/styles';

const lightPink = '#F8BBD0';

// Augment the palette to include an about color
declare module '@mui/material/styles' {
  interface Palette {
    about: Palette['primary'];
  }

  interface PaletteOptions {
    about?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: 'rgb(19, 21, 21)', // Black text color
      secondary: '#ff758f',  // Light Pink Text color
      disabled: 'rgba(0, 0, 0, 0.12)',
    },
    primary: {            // Green
      main: '#243727',
      light: '#4a694d',
      dark: '#111d13',
      contrastText: lightPink,
    },
    secondary: {          // Pink
      main: '#800f2f',
      light: '#ffb3c1',
      dark: '#800f2f',
      contrastText: '#e1eee1',
    },
    background: {
      default: '#f0fff0',   // Sets background
      paper: '#243727',     // Sets background for components
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
  
  components: {
    MuiList: {
      styleOverrides: {
        root: {
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

          ':hover': {
            background: 'rgba(231, 241, 231, .2)',
            
          }

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
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF',
          borderRadius: '12px',
          border: '1px solid rgb(19, 21, 21)',
          boxShadow: '12px 12px 0px rgb(19, 21, 21)',
          width: '60vw',
          margin: '1vh 0 3vh 0',
        }
      }
    },
  },
});

export default theme;
