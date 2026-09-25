import { listItemButtonClasses, type Components, type Theme } from "@mui/material";

export const MuiListItem = (theme: Theme): Components["MuiListItem"] => {
  return {
    styleOverrides: {
      root: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
      },
    },
  };
};

export const MuiListItemButton = (theme: Theme): Components["MuiListItemButton"] => {
  return {
    styleOverrides: {
      root: {
        [`&.${listItemButtonClasses.selected}`]: {
          background: theme.palette.background.default,
          fontWeight: theme.typography.xBold,
        },
      },
    },
  };
};

export const MuiListItemText = (theme: Theme): Components["MuiListItemText"] => {
  return {
    styleOverrides: {
      root: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(0.5),
      },
      primary: {
        fontSize: theme.typography.pxToRem(14),
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.grey[400],
      },
    },
  };
};
