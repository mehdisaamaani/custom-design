import { Components, Theme } from "@mui/material";

export const MuiSkeleton = (theme: Theme): Components["MuiSkeleton"] => {
  return {
    styleOverrides: {
      rounded: {
        borderRadius: (theme.shape.borderRadius as number) * 4,
      },
    },
  };
};
