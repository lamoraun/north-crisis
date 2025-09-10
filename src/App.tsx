import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CrisisPage from './components/CrisisPage';
import { theme } from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <CrisisPage />
        </ThemeProvider>
    );
}

export default App;