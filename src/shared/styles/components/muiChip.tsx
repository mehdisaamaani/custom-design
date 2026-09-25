import { DeleteIcon } from "@/icons";
import type { Components, Theme } from "@mui/material";
import { SvgIcon } from "@mui/material";

declare module "@mui/material/Chip" {
  export interface ChipPropsVariantOverrides {
    simple: true;
  }
}

export const MuiChip = (theme: Theme): Components["MuiChip"] => ({
  defaultProps: {
    deleteIcon: (
      <SvgIcon sx={{ width: 16, height: 16 }}>
        <DeleteIcon />
      </SvgIcon>
    ),
  },
  styleOverrides: {
    root: {
      borderRadius: (theme.shape.borderRadius as number) * 1.5,
      padding: theme.spacing(0.5, 1),
    },
    label: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  variants: [
    {
      props: { variant: "filled", color: "default" },
      style: {
        background: theme.palette.grey[50],
        color: theme.palette.text.fifth,
      },
    },
    {
      props: { variant: "filled", color: "success" },
      style: {
        background: theme.palette.success[100],
        color: theme.palette.success[700],
      },
    },
    {
      props: { variant: "filled", color: "error" },
      style: {
        background: theme.palette.error[100],
        color: theme.palette.error[700],
      },
    },
    {
      props: { variant: "filled", color: "warning" },
      style: {
        background: theme.palette.warning[100],
        color: theme.palette.warning[700],
      },
    },
  ],
});
