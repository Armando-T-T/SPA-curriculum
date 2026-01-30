import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#2d7dff" },
    secondary: { main: "#38bdf8" },
    background: {
      default: "#0b1120",
      paper: "#0f172a",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#94a3b8",
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
    h1: {
      fontSize: "4.4rem",
      fontWeight: 800,
      lineHeight: 0.95,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "4.1rem",
      fontWeight: 800,
      lineHeight: 0.95,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontSize: "2.4rem",
      fontWeight: 800,
      lineHeight: 1.05,
    },
    h4: {
      fontSize: "1.4rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: "0.95rem",
      fontWeight: 500,
      lineHeight: 1.45,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.5,
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.4,
    },
    overline: {
      fontSize: "0.7rem",
      letterSpacing: "0.2em",
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
});

export default theme;
