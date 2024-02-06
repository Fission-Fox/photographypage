import { createTheme } from "@mui/material/styles";
import { Inter, Open_Sans, Overpass, Poppins } from "next/font/google";

const exo = Overpass({
  weight: ["100", "200", "300", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
export const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: { main: "#2D969B" },
    secondary: { main: "#2D969B" },
    mode: "light",
  },

  typography: {
    fontFamily: exo.style.fontFamily,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: "none",
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
