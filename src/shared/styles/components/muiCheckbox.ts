import { type Components, type Theme } from "@mui/material";

export const MuiCheckbox = (theme: Theme): Components["MuiCheckbox"] => {
  return {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        width: theme.typography.pxToRem(16),
        height: theme.typography.pxToRem(16),
      },
      colorPrimary: {
        color: theme.palette.common.black,
      },
    },
  };
};
