import type { Components, Theme } from "@mui/material";

export const MuiSnackbar: Components["MuiSnackbar"] = {
  styleOverrides: {
    root: {
      maxWidth: 360,
    },
  },
};

export const MuiSnackbarContent = (theme: Theme): Components["MuiSnackbarContent"] => ({
  styleOverrides: {
    root: {
      padding: 0,
      border: `1px solid ${theme.palette.common.black}`,
      borderRadius: (theme.shape.borderRadius as number) * 2,
      borderStyle: "solid",
      background: theme.palette.background.primary,
      color: theme.palette.text.primary,
    },
    message: {
      padding: theme.spacing(1.5),
      ...theme.typography.body1,
      fontWeight: theme.typography.fontWeightMedium,
    },
    action: {
      paddingLeft: 0,
      marginRight: 0,
    },
  },
});
