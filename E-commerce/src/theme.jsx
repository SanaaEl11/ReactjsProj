
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
// import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {

        mycolor:{
          main:"#696969"
        },
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: 'white',
          },
          bg: {
            main: "#F6F6F6"
          },
        }
      : {
          // palettevalues for dark mode
          mycolor:{
            main:"#343131"
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main:'black' ,
          },
          text: {
            primary: "#fff",
          },
          bg: {
            main: "#1D2021",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};