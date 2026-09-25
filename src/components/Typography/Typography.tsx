import { Typography as MuiTypography, TypographyProps } from "@mui/material";
import { forwardRef } from "react";

export type ExtendedTypographyProps = TypographyProps & {
  fontWeight?: "regular" | "medium" | "xBold" | "bold" | number;
};

export const Typography = forwardRef<HTMLElement, ExtendedTypographyProps>(
  (props, ref) => {
    return <MuiTypography ref={ref} {...props} />;
  },
);

Typography.displayName = "Typography";
