import type { Components, Theme } from "@mui/material";
import { alpha, buttonClasses, circularProgressClasses } from "@mui/material";

declare module "@mui/material/Button" {
  // export interface ButtonPropsSizeOverrides {}
  // export interface ButtonPropsVariantOverrides {}
  export interface ButtonPropsColorOverrides {
    black: true;
  }
}

declare module "@mui/material/IconButton" {
  export interface IconButtonPropsColorOverrides {
    white: true;
  }
}

export const MuiButton = (theme: Theme): Components["MuiButton"] => {
      const radius = theme.customTokens?.customRadius?.button ?? theme.shape.borderRadius;

  return {
    defaultProps: {
      size: "medium",
      disableElevation: true,
      variant: "contained",
    },
    styleOverrides: {
      root: {
        fontWeight: 600,
        
      },
      sizeSmall: {
        height: 32,
        borderRadius: radius,
        padding: theme.spacing("8px", "10px"),
        fontSize: theme.typography.pxToRem(12),
        [`.${buttonClasses.endIcon}`]: {
          marginRight: 0,
          marginLeft: 8,
          "&>*:nth-of-type(1)": {
            fontSize: theme.typography.pxToRem(16),
          },
        },
        [`.${buttonClasses.startIcon}`]: {
          marginRight: 8,
          marginLeft: 0,
          "&>*:nth-of-type(1)": {
            fontSize: theme.typography.pxToRem(16),
          },
        },
      },
      sizeMedium: {
        height: 40,
        borderRadius: radius,
        padding: theme.spacing("10px", "14px"),
        fontSize: theme.typography.pxToRem(14),
        [`.${buttonClasses.loadingIndicator}`]: {
          [`.${circularProgressClasses.root}`]: {
            width: "24px !important",
            height: "24px !important",
          },
        },
        [`.${buttonClasses.endIcon}`]: {
          marginRight: 0,
          marginLeft: 8,
          "&>*:nth-of-type(1)": {
            fontSize: theme.typography.pxToRem(20),
          },
        },
        [`.${buttonClasses.startIcon}`]: {
          marginRight: 8,
          marginLeft: 0,
          "&>*:nth-of-type(1)": {
            fontSize: theme.typography.pxToRem(20),
          },
        },
      },
      sizeLarge: {
        height: 48,
        borderRadius: radius,
        padding: theme.spacing("14px"),
        fontSize: theme.typography.pxToRem(16),
        [`.${buttonClasses.endIcon}`]: {
          marginRight: 0,
          marginLeft: 8,
          "&>*:nth-of-type(1)": {
            fontSize: theme.typography.pxToRem(20),
          },
        },
        [`.${buttonClasses.startIcon}`]: {
          marginRight: 8,
          marginLeft: 0,
          "&>*:nth-of-type(1)": {
            fontSize: theme.typography.pxToRem(20),
          },
        },
      },
      containedPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.white,
        [`.${buttonClasses.loadingIndicator}`]: {
          color: theme.palette.primary.main,
        },
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.9),
        },
      },
      containedSecondary: {
        background: theme.palette.secondary[400],
        color: theme.palette.text.white,
        borderRadius: radius,
        [`.${buttonClasses.loadingIndicator}`]: {
          color: theme.palette.primary.main,
        },
        "&:hover": {
          backgroundColor: alpha(theme.palette.secondary[400], 0.8),
        },
      },
      outlined: {
        border: 1,
        borderStyle: "solid",
        borderColor: theme.palette.grey[100],
        "&:hover": {
          border: 1,
          borderStyle: "solid",
          borderColor: theme.palette.grey[50],
        },
      },
      textPrimary: {
        background: "transparent",
        [`.${buttonClasses.loadingIndicator}`]: {
          color: theme.palette.primary.main,
        },
      },
      textSecondary: {
        background: "transparent",
        color: theme.palette.secondary[400],
        [`.${buttonClasses.loadingIndicator}`]: {
          color: theme.palette.primary.main,
        },
      },
    },
    variants: [
      {
        props: { variant: "outlined", color: "black" },
        style: {
          border: 1,
          borderStyle: "solid",
          borderColor: theme.palette.grey[100],
          "&:hover": {
            border: 1,
            borderStyle: "solid",
            borderColor: theme.palette.grey[200],
          },
        },
      },
      {
        props: { variant: "outlined", color: "secondary" },
        style: {
          border: 1,
          borderStyle: "solid",
          borderColor: theme.palette.secondary[400],
          color: theme.palette.text.primary,
          background: theme.palette.secondary[50],
          "&:hover": {
            border: 1,
            borderStyle: "solid",
            borderColor: theme.palette.secondary[400],
          },
        },
      },
      {
        props: { variant: "text", color: "black" },
        style: {
          background: "transparent",
          color: theme.palette.grey[500],
          [`.${buttonClasses.loadingIndicator}`]: {
            color: theme.palette.primary.main,
          },
        },
      },
    ],
  };
};

export const MuiIconButton = (theme: Theme): Components["MuiIconButton"] => {
        const radius = theme.customTokens?.customRadius?.button ?? theme.shape.borderRadius;

  return{
  defaultProps: {
    TouchRippleProps: {
      center: false,
    },
  },
  styleOverrides: {
    colorPrimary: {
      borderRadius: radius ,
      background: theme.palette.primary.main,
      color: theme.palette.grey[500],
      ":hover": {
        background: theme.palette.primary.main,
      },
      ":disabled": {
        color: theme.palette.grey[500],
        background: alpha(theme.palette.primary.main, 0.6),
      },
    },
    colorSecondary: {
      borderRadius: radius ,
      background: theme.palette.background.default,
      borderColor: alpha(theme.palette.common.black, 1),
      borderWidth: 1,
      color: theme.palette.grey[500],
      ":hover": {
        background: theme.palette.grey[200],
      },
      ":disabled": {
        background: alpha(theme.palette.background.default, 0.6),
      },
    },
    colorSuccess: {
      borderRadius: radius ,
      background: theme.palette.secondary[100],
      color: theme.palette.secondary[500],
      ":hover": {
        background: theme.palette.secondary[100],
      },
      ":disabled": {
        color: theme.palette.grey[300],
        background: theme.palette.background.tertiary,
      },
    },
    root: {
      padding: 0,
      borderColor: alpha(theme.palette.common.black, 1),
      borderWidth: 1,
      borderRadius: radius ,
    },
    sizeLarge: {
      width: 40,
      height: 40,
    },
    sizeMedium: {
      width: 32,
      height: 32,
    },
    sizeSmall: {
      width: 24,
      height: 24,
    },
  },
  variants: [
    {
      props: { color: "white" },
      style: {
        border: "none",
        background: theme.palette.background.default,
        "&:hover": {
          border: "none",
          background: alpha(theme.palette.background.default, 0.8),
        },
      },
    },
  ],
}
};
