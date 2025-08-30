'use client';
import { createTheme } from '@mui/material/styles';

const lightPink = '#F8BBD0';

// Augment the palette to include an about color
declare module '@mui/material/styles' {
  interface Palette {
    footer: Palette['primary'];
  }

  interface PaletteOptions {
    footer?: PaletteOptions['primary'];
  }
}

// Augment the palete to include a work varient
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    work: true;
    cert: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    navButton: true;
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: 'rgb(19, 21, 21)', // Black text color
      secondary: '#65996aff',  // Light Pink Text color
      disabled: 'rgba(0, 0, 0, 0.12)',
    },
    primary: {            // Green
      main: '#344e38ff',
      light: '#4a694d',
      dark: '#111d13',
      contrastText: lightPink,
    },
    footer: {
      main: 'rgba(0, 0, 0, 0.3)',
      light: '',
      dark: '', 
    },
    secondary: {          // Pink
      main: '#800f2f',
      // light: '#ffb3c1',
      light: '#FFCCCD',
      dark: '#800F2F',
      contrastText: '#e1eee1',
    },
    background: {
      // default: '#f0fff0',   // Sets background
      // default: '#E2F1E2',
      // default: '#FFFFFF',
      paper: '#f8f9fa',     // Sets background for components
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    fontWeightRegular: 400,
    fontWeightBold: 800
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
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: {variant: 'navButton'},
              style: {
                
                ':hover': {
                  textDecoration: 'underline',
                }
              }
            }
          ]
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
            
          },
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
          variants: [
            {
              props: { variant: 'work' },
              style: {
                backgroundColor: '#FFF',
                borderRadius: '12px',
                border: '1px solid rgb(50, 50, 50)',
                boxShadow: '12px 12px 0px rgb(50, 50, 50)',
                margin: '1vh 0 3vh 0',
              }
            },
            {
              props: { variant: 'cert' },
              style: {
                backgroundColor: '#eeeeeeff',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                height: '275px',
                width: '375px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }
            }
          ],
          
        }
      }
    },
    MuiAccordion: {
      defaultProps: {
        'disableGutters': true,
        'square': false,
        'elevation': 0,
      },
      styleOverrides: {
        root: {
          'borderTop': 'none',
          'borderBottom': '1px solid #800f2f',
          'backgroundColor': '#FFF',
          'elevation': '0',
          'boxShadow': 'none',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#4a694d',
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'right',
        }
      }
    }
  },
});

export default theme;
