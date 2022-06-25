import { Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Router from './router'
import theme from 'assets/styles/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
