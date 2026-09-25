import { Theme, type Components } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const MuiTable = (): Components["MuiTable"] => ({
  styleOverrides: {
    root: {
      borderRadius: 16,
      overflow: "hidden",
    },
  },
});

export const MuiTableHead = (theme: Theme): Components["MuiTableHead"] => ({
  styleOverrides: {
    root: {
      height: 64,
      background: theme.palette.background.paper,
      borderRadius: 160,
      overflow: "hidden",
    },
  },
});

export const MuiTableBody = (theme: Theme): Components["MuiTableBody"] => ({
  styleOverrides: {
    root: {
      "& tr:nth-of-type(even)": {
        backgroundColor: alpha(theme.palette.background.paper, 0.5),
      },
    },
  },
});
