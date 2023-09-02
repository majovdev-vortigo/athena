import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import { ThemeProvider } from './context/ThemeContext'; 
import { ThemeProvider } from 'styled-components';


import Home from "./pages/home";
import { useTheme } from './context/ThemeContext';

function App() {

  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <h1>Athena</h1>
      <Header />
      <Sidebar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
