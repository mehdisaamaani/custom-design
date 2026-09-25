import { Components, Theme, formControlLabelClasses } from "@mui/material";

export const MuiFormControlLabel = (theme: Theme): Components["MuiFormControlLabel"] => {
  return {
    styleOverrides: {
      root: () => ({
        borderRadius: (theme.shape.borderRadius as number) * 3,
        display: "flex",
        alignItems: "center",
        marginRight: 0,
        marginLeft: 0,
        textAlign: "end",
        flexDirection: "row-reverse",
        gap: theme.typography.pxToRem(8),
        transition: theme.transitions.create(["border-color", "border-width"]),
        [`.${formControlLabelClasses.label}`]: {
          width: "100%",
          fontSize: theme.typography.pxToRem(12),
        },
      }),
    },
  };
};
