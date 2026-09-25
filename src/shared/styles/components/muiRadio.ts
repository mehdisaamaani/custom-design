import type { Components, Theme } from "@mui/material";
import { radioClasses } from "@mui/material";

declare module "@mui/material/Radio" {
  export interface RadioPropsColorOverrides {
    stroke: true;
  }
}
export const MuiRadio = (theme: Theme): Components["MuiRadio"] => {
  return {
    styleOverrides: {
      colorPrimary: {
        color: theme.palette.common.black,
        [`&.${radioClasses.checked}`]: {
          color: theme.palette.background.paper,
        },
      },
    },
  };
};
