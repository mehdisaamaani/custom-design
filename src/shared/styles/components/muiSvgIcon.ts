import type { Components, Theme } from "@mui/material";

declare module "@mui/material/SvgIcon" {
  export interface SvgIconPropsColorOverrides {
    white: true;
    grey: true;
  }
  export interface SvgIconPropsSizeOverrides {
    tiny: true;
    xLarge: true;
  }
}

export const MuiSvgIcon = (theme: Theme): Components["MuiSvgIcon"] => {
  return {
    styleOverrides: {
      fontSizeLarge: {
        fontSize: theme.typography.pxToRem(28),
      },
      fontSizeMedium: {
        fontSize: theme.typography.pxToRem(24),
      },
      fontSizeSmall: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
    variants: [
      {
        props: { fontSize: "tiny" },
        style: { fontSize: theme.typography.pxToRem(16) },
      },
      {
        props: { color: "white" },
        style: { color: theme.palette.background.default },
      },
      {
        props: { color: "grey" },
        style: { color: theme.palette.grey[200] },
      },
      {
        props: { fontSize: "xLarge" },
        style: { fontSize: theme.typography.pxToRem(32) },
      },
    ],
  };
};
