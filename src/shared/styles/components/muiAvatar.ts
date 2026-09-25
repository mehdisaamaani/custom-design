import type { Components, Theme } from "@mui/material";

declare module "@mui/material/Avatar" {
  interface AvatarPropsVariantOverrides {
    tiny: true;
    small: true;
    medium: true;
    large: true;
    xLarge: true;
  }
}

export const MuiAvatar = (theme: Theme): Components["MuiAvatar"] => {
  return {
    variants: [
      {
        props: { variant: "tiny" },
        style: {
          width: theme.typography.pxToRem(32),
          height: theme.typography.pxToRem(32),
        },
      },
      {
        props: { variant: "small" },
        style: {
          width: theme.typography.pxToRem(40),
          height: theme.typography.pxToRem(40),
        },
      },
      {
        props: { variant: "medium" },
        style: {
          width: theme.typography.pxToRem(48),
          height: theme.typography.pxToRem(48),
        },
      },
      {
        props: { variant: "large" },
        style: {
          width: theme.typography.pxToRem(56),
          height: theme.typography.pxToRem(56),
        },
      },
      {
        props: { variant: "xLarge" },
        style: {
          width: theme.typography.pxToRem(86),
          height: theme.typography.pxToRem(86),
        },
      },
    ],
    styleOverrides: {
      img: {
        height: "auto",
      },
    },
  };
};
