import type { Components } from "@mui/material";

export const MuiToolbar = (): Components["MuiToolbar"] => {
  return {
    styleOverrides: {
      root: {
        paddingLeft: "16px !important",
        paddingRight: "16px !important",
      },
      regular: {
        height: 54,
      },
    },
  };
};
