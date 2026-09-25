import { ChevronDownIcon } from "@/icons";
import type { Components, SvgIconProps, Theme } from "@mui/material";
import { outlinedInputClasses, SvgIcon } from "@mui/material";

const IconComponent = (props: SvgIconProps) => {
  return <SvgIcon component={ChevronDownIcon} {...props} />;
};

export const MuiSelect = (theme: Theme): Components["MuiSelect"] => {
  return {
    defaultProps: {
      IconComponent,
      size: "medium",
      variant: "outlined",
    },
    styleOverrides: {
      root: {
        padding: theme.spacing(0),
        [`& .${outlinedInputClasses.disabled}`]: {
          background: theme?.palette?.grey[50],
          fontSize: theme.typography.pxToRem(14),
          color: theme.palette.grey[300],
        },
      },
    },
  };
};
