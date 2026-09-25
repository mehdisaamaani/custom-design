import { alpha, Theme, type Components } from "@mui/material";

export const MuiBackdrop = (theme: Theme): Components["MuiBackdrop"] => ({
  styleOverrides: {
    root: {
      zIndex: theme.zIndex.tooltip + 1,
      background: alpha(theme.palette.grey[900], 0.6),
      backdropFilter: "blur(4px)",
    },
  },
});
