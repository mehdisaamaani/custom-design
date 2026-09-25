// baseThemeOptions.ts
import { ThemeOptions } from "@mui/material/styles";
import { elevations } from "./system/elevations";
import { lightPalette } from "./system/palettes";
import { shadows } from "./system/shadow";
import { createTypographyOptions } from "./system/typography";

export const baseThemeOptions: ThemeOptions = {
  direction: "rtl",
  palette: lightPalette,
  elevations,
  shadows,
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
};
