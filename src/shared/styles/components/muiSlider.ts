import type { Components, Theme } from "@mui/material";
import { sliderClasses } from "@mui/material";

declare module "@mui/material/Slider" {
  export interface SliderPropsSizeOverrides {
    large: true;
  }
}

export const MuiSlider = (theme: Theme): Components["MuiSlider"] => ({
  styleOverrides: {
    thumb: {
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: theme.palette.common.black,
      background: theme.palette.background.primary,
    },
    rail: {
      background: theme.palette.background.paper,
      opacity: 1,
    },
    mark: {
      display: "none",
    },
    markLabel: {
      marginTop: theme.spacing(0.5),
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  variants: [
    {
      props: { size: "large" },
      style: {
        [`.${sliderClasses.thumb}`]: {
          width: 28,
          height: 28,
        },
        [`.${sliderClasses.rail}`]: {
          height: 8,
        },
        [`.${sliderClasses.track}`]: {
          height: 8,
        },
      },
    },
  ],
});
