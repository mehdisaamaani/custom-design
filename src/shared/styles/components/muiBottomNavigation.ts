import type { Components, Theme } from "@mui/material";
import { alpha, bottomNavigationActionClasses } from "@mui/material";

export const MuiBottomNavigation = (theme: Theme): Components["MuiBottomNavigation"] => {
  return {
    styleOverrides: {
      root: {
        justifyContent: "space-between",
        width: "100%",
        height: 80,
        borderTopRightRadius: (theme.shape.borderRadius as number) * 5,
        borderTopLeftRadius: (theme.shape.borderRadius as number) * 5,
        backgroundColor: theme.palette.background.primary,
        overflow: "hidden",
        boxShadow: theme.elevations.level1,
      },
    },
  };
};

export const MuiBottomNavigationAction = (theme: Theme): Components["MuiBottomNavigationAction"] => ({
  styleOverrides: {
    root: {
      minWidth: "auto",
      color: alpha(theme.palette.common.black, 0.8),
      paddingRight: theme.spacing(1.5),
      paddingLeft: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightMedium,
    },
    label: {
      marginTop: theme.spacing(0.5),

      [`&.${bottomNavigationActionClasses.selected}`]: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.pxToRem(12),
      },
    },
  },
});
