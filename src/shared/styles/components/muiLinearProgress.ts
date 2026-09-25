import type { Components, Theme } from "@mui/material";

export const MuiLinearProgress = (theme: Theme): Components["MuiLinearProgress"] => {
  return {
    styleOverrides: {
      root: {
        borderRadius: (theme.shape.borderRadius as number) * 2,
      },
      colorPrimary: {
        backgroundColor: theme.palette.background.secondary,
      },
    },
  };
};
