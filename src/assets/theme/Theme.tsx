import { createTheme } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       danger: React.CSSProperties["color"];
//     };
//   }

//   interface Palette {
//     neutral: Palette["primary"];
//   }
//   interface PaletteOptions {
//     neutral: PaletteOptions["primary"];
//   }

//   interface PaletteColor {
//     darker?: string;
//   }
//   interface SimplePaletteColorOptions {
//     darker?: string;
//   }
//   interface ThemeOptions {
//     status: {
//       danger: React.CSSProperties["color"];
//     };
//   }
// }

const theme = createTheme({
  // status: {
  //   danger: "#e53e3e",
  // },
  typography: {
    allVariants: {
      textTransform: "none",
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#fff",
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: "bold",
      //   color: "#1A75D2",
      color: "black",
    },
  },
  palette: {
    primary: {
      main: "#0971f1",
      dark: "#053e85",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#1A75D2",
            color: "#fff",
            margin: 2,
            fontSize:'14px',
            "&:hover": {
              color: "#1A75D2",
              backgroundColor: "#fff",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            backgroundColor: "#fff",
            color: "#1A75D2",
            fontSize:'14px',
            margin: 2,
            "&:hover": {
              color: "#fff",
            backgroundColor: "#1A75D2",

            },
          },
        },
      ],
    },
  },
});

export default theme;
