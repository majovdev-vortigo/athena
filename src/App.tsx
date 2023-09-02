// src/App.js
import { ThemeProvider } from 'styled-components';
import { Button, CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme } from './Theme';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <MuiThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Header/>
        <Button variant='outlined' >Hello! I'm a button</Button>

      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
