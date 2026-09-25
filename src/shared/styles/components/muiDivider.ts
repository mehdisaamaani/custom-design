import type { Components, Theme } from "@mui/material";

export const MuiDivider = (theme: Theme): Components["MuiDivider"] => {
  return {
    styleOverrides: {
      root: {
        borderColor: theme.palette.common.black,
      },
    },
  };
};
