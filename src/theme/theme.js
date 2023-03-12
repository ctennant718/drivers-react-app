import { createTheme } from "@mui/material/styles";
import green from "@mui/material/colors/green";
import grey from "@mui/material/colors/grey";

let theme = createTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: grey[900],
    },
    secondary: {
      main: "#edf2ff",
      contrastText: grey[900],
    },
  },
});

export default theme;
