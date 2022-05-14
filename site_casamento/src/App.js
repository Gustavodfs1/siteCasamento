
//import './App.css';
import { createTheme } from "@mui/system";
import {Home} from "./pages/Home";
import { ThemeProvider } from "@mui/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Red Hat Display',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiTypography: {
      body1: { 
        fontFamily: 'Red Hat Display',
        color: 'purple'
      },
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
