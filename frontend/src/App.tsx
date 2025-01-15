import React, { useState } from "react";

import Home from "./page/home/Home";

import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global";
import { dark, light } from "./styles/theme/theme";

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? dark : light}>
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
