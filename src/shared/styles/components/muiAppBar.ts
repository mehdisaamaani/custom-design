import type { Components, Theme } from "@mui/material";

export const MuiAppBar = (theme: Theme): Components["MuiAppBar"] => {
  return {
    defaultProps: {
      variant: "simple",
      position: "relative",
    },
    styleOverrides: {
      root: {
        background: theme.palette.background.default,
      },
    },
  };
};
