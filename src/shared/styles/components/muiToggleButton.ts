import { toggleButtonClasses, toggleButtonGroupClasses, type Components, type Theme } from "@mui/material";

export const MuiToggleButton = (theme: Theme): Components["MuiToggleButton"] => {
  return {
    styleOverrides: {
      sizeSmall: {
        height: 32,
      },
      root: {
        padding: 0,
        [`&.${toggleButtonClasses.selected}`]: {
          backgroundColor: theme.palette.primary.main,
        },
        [`&.${toggleButtonClasses.selected}:hover`]: {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  };
};

export const MuiToggleButtonGroup = (theme: Theme): Components["MuiToggleButtonGroup"] => {
  return {
    styleOverrides: {
      root: {
        border: `2px solid ${theme.palette.text.tertiary}`,
        borderRadius: (theme.shape.borderRadius as number) * 3,
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        [`& .${toggleButtonGroupClasses.grouped}`]: {
          border: 0,
          borderRadius: (theme.shape.borderRadius as number) * 2,
          [`&.${toggleButtonGroupClasses.disabled}`]: {
            border: 0,
          },
        },
        [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]: {
          border: 0,
        },
      },
    },
  };
};
