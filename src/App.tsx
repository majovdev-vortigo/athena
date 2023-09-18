// src/App.js
import { ThemeProvider } from 'styled-components';
import { Button, CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './Theme';
import Header from './components/Header';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
  }
`;

function App() {
  const [dark, setTheme] = useState(false);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <MuiThemeProvider theme={dark ? darkTheme : lightTheme}>
          <CssBaseline />
          <Header />
          <Navbar dark={dark} setTheme={setTheme} />
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
