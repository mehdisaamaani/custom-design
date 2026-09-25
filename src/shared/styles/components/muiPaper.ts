import { alpha, type Components, type Theme } from "@mui/material";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    simple: true;
  }
}

export const MuiPaper = (theme: Theme): Components["MuiPaper"] => ({
  defaultProps: {
    variant: "simple",
  },
  styleOverrides: {
    root: {
      background: theme.palette.background.paper,
    },
    outlined: {
      borderColor: alpha(theme.palette.common.black, 0.5),
    },
  },
  variants: [
    {
      props: { variant: "simple" },
      style: {
        border: "none",
        boxShadow: "none",
      },
    },
  ],
});
