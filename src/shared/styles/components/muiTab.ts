import { tabClasses, Theme, type Components } from "@mui/material";

export const MuiTab = (theme: Theme): Components["MuiTab"] => ({
  styleOverrides: {
    root: {
      borderBottom: `1px solid ${theme.palette.grey[50]}`,
      [`& .${tabClasses.selected}`]: {
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium,
        opacity: 1,
      },
    },
  },
});

export const MuiTabs = (theme: Theme): Components["MuiTabs"] => ({
  styleOverrides: {
    root: {
      color: theme.palette.common.black,
      "&.Mui-selected": {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  },
});
