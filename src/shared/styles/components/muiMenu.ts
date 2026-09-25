import type { Components, Theme } from "@mui/material";
import { alpha, backdropClasses, menuItemClasses } from "@mui/material";

export const MuiMenu = (theme: Theme): Components["MuiMenu"] => {
  return {
    styleOverrides: {
      root: {
        [`.${backdropClasses.root}`]: {
          background: "transparent",
          backdropFilter: "none",
        },
      },
      list: {
        padding: theme.spacing(1, 0),
      },
      paper: {
        borderRadius: (theme.shape.borderRadius as number) * 1.5,
      },
    },
  };
};

export const MuiMenuItem = (theme: Theme): Components["MuiMenuItem"] => {
  return {
    styleOverrides: {
      gutters: {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
      },
      dense: {
        padding: 0,
      },
      root: {
        fontSize: theme.typography.pxToRem(12),
        lineHeight: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightMedium,
        borderRadius: 0,
        [`.${menuItemClasses.selected}`]: {
          backgroundColor: alpha(theme.palette.common.black, 0.8),
          ":hover": {
            backgroundColor: alpha(theme.palette.common.black, 0.8),
          },
        },
      },
    },
  };
};
