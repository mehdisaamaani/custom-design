import type { Components, Theme } from "@mui/material";
import { alpha, switchClasses } from "@mui/material";

export const MuiSwitch = (theme: Theme): Components["MuiSwitch"] => ({
  styleOverrides: {
    root: {
      height: 48,
      width: 72,
    },
    switchBase: {
      padding: theme.spacing(2),
      [`&.${switchClasses.disabled}`]: {
        [`& + .${switchClasses.track}`]: {
          background: alpha(theme.palette.primary.main, 0.6),
        },
        [`& .${switchClasses.thumb}`]: {
          background: alpha(theme.palette.common.white, 0.6),
        },
      },
      [`&.${switchClasses.checked}`]: {
        transform: `translateX(${theme.spacing(3)})`,
        [`& + .${switchClasses.track}`]: {
          opacity: 1,
          borderWidth: 0,
        },
        [`& .${switchClasses.thumb}`]: {
          border: "none",
        },
      },
    },
    track: ({ ownerState }) => ({
      opacity: 1,
      backgroundColor: ownerState.checked ? theme.palette.background.paper : theme.palette.background.primary,
      borderRadius: (theme.shape.borderRadius as number) * 4.5,
      ...(!ownerState.checked && { borderWidth: 1, borderStyle: "solid", borderColor: theme.palette.common.black }),
    }),
    thumb: ({ ownerState }) => {
      return {
        boxShadow: theme.elevations.level1,
        background: theme.palette.common.white,
        width: 16,
        height: 16,
        ...(!ownerState.checked && { borderWidth: 1, borderStyle: "solid", borderColor: theme.palette.common.black }),
      };
    },
  },
});
