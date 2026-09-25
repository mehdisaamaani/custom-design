import { ThemeOptions } from "@mui/material/styles";
import { lightPalette } from "./palettes";
import { createTypographyOptions } from "./typography";


export const baseThemeOptions: ThemeOptions = {
  direction: "rtl",
  palette: lightPalette,
 
  typography: createTypographyOptions(),
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1040,
      lg: 1200,
      xl: 1536,
    },
  },
  customTokens: {
    input: {
      heights: {
        sm: 32,
        md: 40,
        lg: 48,
      },
      paddingX: {
        sm: 8,
        md: 12,
        lg: 16,
      },
      fontSize: {
        sm: 12,
        md: 14,
        lg: 16,
      },
      borderRadius: 12,
      borderWidth: 1,
      focusRingWidth: 2,
       colors: {
      border: "#F2F4F7",
      hoverBorder: "#3B82F6",
      hoverRing: "rgba(59,130,246,0.18)",
      focusBorder: "#2563EB",
      focusRing: "rgba(37,99,235,0.22)",
      errorBorder: "#F04438",
    },
    },
  },
};
