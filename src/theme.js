import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

// Tema 1
const theme1 = createTheme({
  palette: {
    primary: {
      main: colors.blue[600],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: colors.blue[600],
          color: "#fff",
          "&:hover": {
            backgroundColor: colors.blue[100],
          },
        },
        outlined: {
          borderColor: "#ddd",
          color: "#333",
          "&:hover": {
            borderColor: "#aaa",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontWeight: "bold",
          color: colors.blue[600],
          textAlign: "left",
          fontSize: "2rem",
        },
      },
    },
  },
});

// Tema 2
const theme2 = createTheme({
  palette: {
    primary: {
      main: colors.blueGrey[700],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: colors.blueGrey[700],
          color: "#fff",
          "&:hover": {
            backgroundColor: colors.green[100],
          },
        },
        outlined: {
          borderColor: "#ddd",
          color: "#333",
          "&:hover": {
            borderColor: "#aaa",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontWeight: "normal",
          color: colors.blueGrey[700],
          fontSize: "3rem",
        },
        body2: {
          color: colors.blueGrey[700],
        },
      },
    },
  },
});

export { theme1, theme2 };
