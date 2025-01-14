import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Home from "./page/home/Home";
import { GlobalStyles } from "./theme/global";

const App: React.FC = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Home />
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
