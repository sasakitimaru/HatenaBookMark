import React, { createContext } from "react";
import "../../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const DarkMode = createTheme({
  palette: {
    mode: "dark",
  },
});
export const LightMode = createTheme({
  palette: {
    mode: "light",
  },
});

export const DisplayModeContext = createContext({
  displayMode: "light",
  setDisplayMode: () => {},
});

const App = ({ Component, pageProps }) => {
  const [displayMode, setDisplayMode] = React.useState("light");
  return (
    <ThemeProvider theme={ displayMode === 'light' ? LightMode : DarkMode}>
      <DisplayModeContext.Provider value={{ displayMode, setDisplayMode }}>
        <CssBaseline />
        <Component {...pageProps} />
      </DisplayModeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
