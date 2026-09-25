import type { Components, Theme } from "@mui/material";
import { alpha, dialogClasses } from "@mui/material";

export const MuiDialog = (theme: Theme): Components["MuiDialog"] => {
  return {
    defaultProps: {
      maxWidth: "xs",
    },
    styleOverrides: {
      paper: {
        width: "100%",
        border: `1px solid ${alpha(theme.palette.common.black, 0.5)}`,
        borderRadius: (theme.shape.borderRadius as number as number) * 1.5,
        [theme.breakpoints.up("md")]: {
          borderRadius: (theme.shape.borderRadius as number as number) * 6,
        },
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        backgroundColor: theme.palette.background.default,
      },
      root: {
        borderColor: theme.palette.common.black,
        [`& .${dialogClasses.paper}`]: {
          padding: theme.spacing(2),
        },
      },
    },
  };
};
