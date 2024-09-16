import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"YekanBakh" , "Roboto" , "Helvetica" , "Arial" , sans-serif`,
    fontWeightLight: 300,
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },

  direction: "rtl",
});

export default theme;
