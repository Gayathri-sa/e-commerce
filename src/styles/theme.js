import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { typography } from "./typography";
import {colorSchemes} from "./color-theme";

let theme = createTheme({
  typography,
  colorSchemes,
});


theme = responsiveFontSizes(theme, {
  factor: 2, 
});

export default theme;
