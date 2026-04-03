import { createTheme } from "@mui/material/styles";

export const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#0b0b0b" : "#f5f5f5",
        paper: darkMode ? "#141414" : "#ffffff",
      },
      primary: {
        main: "#e50914",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });