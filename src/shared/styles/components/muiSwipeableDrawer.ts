import type { Components, Theme } from "@mui/material";
import { drawerClasses } from "@mui/material";

export const MuiSwipeableDrawer = (theme: Theme): Components["MuiSwipeableDrawer"] => {
  const borderUnit = (theme.shape.borderRadius as number) * 6;
  return {
    defaultProps: {
      sx: {
        [`.${drawerClasses.paper}`]: {
          padding: theme.spacing(0, 2, 2, 2),
          background: theme.palette.background.default,
          borderRadius: `${borderUnit}px ${borderUnit}px 0px 0px`,
        },
      },
    },
  };
};
