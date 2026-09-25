import type { Components, Theme } from "@mui/material";

export const MuiCard = (theme: Theme): Components["MuiCard"] => {
  return {
    styleOverrides: {
      root: {
        background: theme.palette.background.default,
        overflow: "visible",
        borderRadius: (theme.shape.borderRadius as number) * 4,
      },
    },
    defaultProps: {
      elevation: 0,
    },
    variants: [
      {
        props: {
          variant: "simple",
        },
        style: {
          background: theme.palette.background.paper,
        },
      },
    ],
  };
};

export const MuiCardContent = (theme: Theme): Components["MuiCardContent"] => {
  return {
    styleOverrides: {
      root: {
        padding: theme.spacing(2),
        "&:last-child": {
          paddingBottom: theme.spacing(2),
        },
      },
    },
  };
};
