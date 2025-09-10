import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00acc1', // бирюзовый
            light: '#4fb3bf',
            dark: '#00838f',
        },
        secondary: {
            main: '#8d6e63', // коричневый
            light: '#be9c91',
            dark: '#5d4037',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#e0e0e0',
            secondary: '#9e9e9e',
        },
        divider: '#333333',
    },
    typography: {
        fontFamily: '"Cinzel", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            letterSpacing: '0.1em',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.5rem',
            letterSpacing: '0.05em',
        },
        h6: {
            fontWeight: 500,
            letterSpacing: '0.05em',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#424242 #1e1e1e',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#1e1e1e',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#424242',
                        borderRadius: '4px',
                        '&:hover': {
                            background: '#616161',
                        },
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    background: 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)',
                    border: '1px solid #333',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                },
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },
    },
});