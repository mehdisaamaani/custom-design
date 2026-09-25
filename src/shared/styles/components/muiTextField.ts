import type { Components, Theme } from "@mui/material";
import { inputBaseClasses, outlinedInputClasses } from "@mui/material";
import { bgcolor, color, height } from "@mui/system";

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    sm: true;
    md: true;
    lg: true;
  }
}
declare module "@mui/material/FormControl" {}
declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    lg: true;
    sm: true;
    md: true;
  }
}
declare module "@mui/material/OutlinedInput" {
  interface OutlinedInputPropsSizeOverrides {
    lg: true;
  }
}
export const MuiTextField = (theme: Theme): Components["MuiTextField"] => ({
  defaultProps: {
    margin: "normal",
    fullWidth: true,
    size: "md",
  },
  styleOverrides: {
    root: {
      [`& .${outlinedInputClasses.disabled}`]: {
        background: theme?.palette?.grey[50],
        borderRadius: (theme.shape.borderRadius as number) * 1.5,
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.grey[300],
      },
    },
  },
});

export const MuiOutlinedInput = (
  theme: Theme,
): Components["MuiOutlinedInput"] => ({
  styleOverrides: {
    root: ({ ownerState }) => ({
      fontSize: theme.typography.pxToRem(14),
      backgroundColor: theme.palette.background.default,
      borderRadius: (theme.shape.borderRadius as number) * 1.5,
      color: theme.palette.text.primary,
      padding: theme.spacing(0, 1.5),

      [`& .${outlinedInputClasses.notchedOutline}`]: {
        border: "1px solid",
        borderColor: theme.customTokens.input.colors.border,
      },

      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        ...(!ownerState.disabled && {
border: theme.customTokens.input.colors.hoverBorder,          boxShadow: `0 0 0 2px ${theme.customTokens.input.colors.hoverRing}`,
        }),
      },

      [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.customTokens.input.colors.focusBorder,
        boxShadow: `0 0 0 2px ${theme.customTokens.input.colors.focusRing}`,
      },

      [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.customTokens.input.colors.errorBorder,
      },

      [`@media (hover: none)`]: {
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          ...(!ownerState.disabled && {
            borderColor: theme.customTokens.input.colors.border,
            boxShadow: "none",
          }),
        },
      },
    }),

    notchedOutline: {
      border: "1px solid",
      borderColor: theme.customTokens.input.colors.border,
    },
  },

  variants: [
    {
      props: { size: "sm", multiline: false },
      style: {
        [`&.${inputBaseClasses.root}`]: {
          padding: theme.spacing(0.5, 1),
          height: theme.customTokens.input.heights.sm,
        },
        [`.${inputBaseClasses.input}`]: {
          padding: theme.spacing("10px", "12px"),
          height: theme.customTokens.input.heights.sm,
        },
      },
    },
    {
      props: { size: "md", multiline: false },
      style: {
        [`&.${inputBaseClasses.root}`]: {
          padding: theme.spacing(1, 1.5),
          height: theme.customTokens.input.heights.md,
        },
        [`.${inputBaseClasses.input}`]: {
          padding: theme.spacing("10px", "12px"),
          height: theme.customTokens.input.heights.md,
        },
      },
    },
    {
      props: { size: "lg", multiline: false },
      style: {
        [`&.${inputBaseClasses.root}`]: {
          padding: theme.spacing(1.5, 2),
          height: theme.customTokens.input.heights.lg,
        },
        [`.${inputBaseClasses.input}`]: {
          padding: theme.spacing("10px", "12px"),
          height: theme.customTokens.input.heights.lg,
        },
      },
    },
  ],
});
;

export const MuiFormHelperText = ({
  spacing,
  typography,
}: Theme): Components["MuiFormHelperText"] => ({
  styleOverrides: {
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      ...typography.xs,
      fontWeight: typography.fontWeightMedium,
      lineHeight: "inherit",
      paddingTop: spacing(1),
      margin: 0,
    },
  },
  variants: [
    {
      props: { margin: "dense" },
      style: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
  ],
});

export const MuiFormControl = ({
  spacing,
}: Theme): Components["MuiFormControl"] => ({
  styleOverrides: {
    marginNormal: {
      marginTop: spacing(1.25),
      marginBottom: spacing(1),
    },
  },
});
